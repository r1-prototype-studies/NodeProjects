const express = require('express');
const User = require('../models/users');

const router = new express.Router();

router.get('/users', async (req, res) => {
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

router.get('/users/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
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

router.patch('/users/:id', async (req, res) => {
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

router.delete('/users/:id', async (req, res) => {
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

module.exports = router;
