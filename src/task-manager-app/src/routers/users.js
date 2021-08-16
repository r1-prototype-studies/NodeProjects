const express = require('express');
const multer = require('multer');
const User = require('../models/users');
const auth = require('../middlewares/auth');
//const errorMiddleware = require('../middlewares/error');

const router = new express.Router();

router.get('/users', auth, async (req, res) => {
	try {
		const user = await User.find();
		res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
	// User.find()
	// 	.then(user => res.status(200).send(user))
	// 	.catch(error => res.status(500).send(error));
});

router.get('/users/me', auth, async (req, res) => {
	try {
		await req.user.populate('tasks').execPopulate();
		console.log(req.user.tasks);
		res.status(200).send(req.user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.get('/users/:id', auth, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		console.log({ 1: user });
		if (!user) {
			return res.status(404).send();
		}
		res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
	// User.findById(req.params.id)
	// 	.then(user => {
	// 		if (!user) {
	// 			res.status(404).send();
	// 		}
	// 		res.status(200).send(user);
	// 	})
	// 	.catch(error => res.status(500).send(error));
});

router.post('/users', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		const token = await user.generateToken();
		res.status(201).send({ user, token });
	} catch (error) {
		res.status(400).send(error);
	}

	// user
	// 	.save()
	// 	.then(() => res.status(201).send(user))
	// 	.catch(error => {
	// 		res.status(400);
	// 		res.send(error);
	// 	});
});

router.post('/users/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateToken();
		res.send({ user, token });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

router.post('/users/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter(
			token => token.token !== req.token
		);
		await req.user.save();
		res.send('Logged out successfully');
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post('/users/logoutAll', auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send('Logged out successfully');
	} catch (error) {
		res.status(500).send(error);
	}
});

router.patch('/users/:id', auth, async (req, res) => {
	try {
		const updates = Object.keys(req.body);
		const allowedUpdates = ['name', 'password', 'age'];
		const isValidOperation = updates.every(update =>
			allowedUpdates.includes(update)
		);
		if (!isValidOperation) {
			return res.status(400).send({ error: 'Invalid operation' });
		}

		// The new: true --> will return the new updated user
		// runValidators: true --> validate the user object before updating it
		// const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		// 	new: true,
		// 	runValidators: true,
		// });

		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).send();
		}
		updates.forEach(update => (user[update] = req.body[update]));
		await user.save();

		res.status(202).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.patch('/users', auth, async (req, res) => {
	try {
		const updates = Object.keys(req.body);
		const allowedUpdates = ['name', 'password', 'age'];
		const isValidOperation = updates.every(update =>
			allowedUpdates.includes(update)
		);
		if (!isValidOperation) {
			return res.status(400).send({ error: 'Invalid operation' });
		}

		// The new: true --> will return the new updated user
		// runValidators: true --> validate the user object before updating it
		// const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		// 	new: true,
		// 	runValidators: true,
		// });

		updates.forEach(update => (req.user[update] = req.body[update]));
		await req.user.save();

		res.status(202).send(req.user);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.delete('/users/:id', auth, async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);

		if (!user) {
			return res.status(404).send();
		}
		res.send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.delete('/users', auth, async (req, res) => {
	try {
		await req.user.remove();
		res.send(req.user);
	} catch (error) {
		res.status(500).send(error);
	}
});

const upload = multer({
	//dest: 'avatars', // File directory to store the file
	limits: {
		fileSize: 1024 * 1024, // In bytes
	},
	fileFilter(req, file, callback) {
		// Accept only pdf files
		//if (!file.originalname.endsWith('.pdf')) {
		// if (!file.originalname.match(/\.(doc|docx)$/)) {
		// 	return callback(new Error('Please upload a word file'));
		// }
		// callback(undefined, true);

		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
			return callback(new Error('Please upload a picture'));
		}
		callback(undefined, true);
	},
});

router.post(
	'/users/me/avatar',
	auth,
	upload.single('avatar'),
	async (req, res) => {
		try {
			req.user.avatar = req.file.buffer;
			await req.user.save();
			res.send('Picture saved successfully');
		} catch (error) {
			res.status(500).send(error.message);
		}
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);

router.delete(
	'/users/me/avatar',
	auth,
	async (req, res) => {
		try {
			req.user.avatar = undefined;
			await req.user.save();
			res.send('Picture removed successfully');
		} catch (error) {
			res.status(500).send(error.message);
		}
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);

router.get('/users/:id/avatar', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user || !user.avatar) {
			res.status(400).send();
		}
		res.set('Content-Type', 'image/jpg');
		res.send(user.avatar);
	} catch (error) {
		res.status(400).send();
	}
});

module.exports = router;
