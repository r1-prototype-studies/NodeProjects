const express = require('express');
require('./db/mongoose'); // we don't need anything from this file but we need to run this file.
const User = require('./models/users');
const Task = require('./models/tasks');

const app = express();
const port = process.env.PORT || 12345;

app.use(express.json());

app.get('/users', async (req, res) => {
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

app.get('/users/:id', async (req, res) => {
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

app.post('/users', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).send(user);
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

app.patch('/users/:id', async (req, res) => {
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
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!user) {
			return res.status(404).send();
		}
		res.status(202).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.delete('/users/:id', async (req, res) => {
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

app.get('/tasks', async (req, res) => {
	try {
		const task = await Task.find();
		res.status(200).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
	// Task.find()
	// 	.then(task => res.status(200).send(task))
	// 	.catch(error => res.status(500).send(error));
});

app.get('/tasks/:id', async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).send();
		}
		res.status(200).send(task);
	} catch (error) {
		res.status(500).send(error);
	}
	// Task.findById(req.params.id)
	// 	.then(task => {
	// 		if (!task) {
	// 			res.status(404).send();
	// 		}
	// 		res.status(200).send(task);
	// 	})
	// 	.catch(error => res.status(500).send(error));
});

app.post('/tasks', async (req, res) => {
	try {
		const task = new Task(req.body);
		await task.save();
		res.status(201).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
	// const task = new Task(req.body);
	// task
	// 	.save()
	// 	.then(() => res.status(201).send(task))
	// 	.catch(error => {
	// 		res.status(400);
	// 		res.send(error);
	// 	});
});

app.patch('/tasks/:id', async (req, res) => {
	try {
		const updates = Object.keys(req.body);
		const allowedUpdates = ['description', 'completed'];
		const isValidOperation = updates.every(update =>
			allowedUpdates.includes(update)
		);
		if (!isValidOperation) {
			return res.status(400).send({ error: 'Invalid operation' });
		}

		// The new: true --> will return the new updated user
		// runValidators: true --> validate the user object before updating it
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!task) {
			return res.status(404).send();
		}
		res.status(202).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.delete('/tasks/:id', async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);

		if (!task) {
			return res.status(404).send();
		}
		res.send(task);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(port, () => {
	console.log(`Application is srarted and running at ${port}`);
});
