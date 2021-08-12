const express = require('express');
const Task = require('../models/tasks');
const router = new express.Router();

router.get('/tasks', async (req, res) => {
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

router.get('/tasks/:id', async (req, res) => {
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

router.post('/tasks', async (req, res) => {
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

router.patch('/tasks/:id', async (req, res) => {
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

router.delete('/tasks/:id', async (req, res) => {
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

module.exports = router;
