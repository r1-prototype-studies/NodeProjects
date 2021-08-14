const express = require('express');
const Task = require('../models/tasks');
const auth = require('../middlewares/auth');

const router = new express.Router();

//GET /tasks?completed=false/true
//GET /tasks?limit=?&skip=?
//GET /tasks?sortby=CreatedAt:desc/:asc
router.get('/tasks', auth, async (req, res) => {
	try {
		const match = {};
		const options = {};
		if (req.query.completed) {
			match.completed = req.query.completed === 'true';
		}

		if (req.query.limit) {
			options.limit = parseInt(req.query.limit);
		}

		if (req.query.skip) {
			options.skip = parseInt(req.query.skip);
		}

		if (req.query.sortby) {
			options.sort = {};
			const parts = req.query.sortby.split(':');
			options.sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
		}

		//const task = await Task.find();
		await req.user
			.populate({
				path: 'tasks',
				match,
				options,
			})
			.execPopulate();
		res.status(200).send(req.user.tasks);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
	// Task.find()
	// 	.then(task => res.status(200).send(task))
	// 	.catch(error => res.status(500).send(error));
});

router.get('/tasks/:id', auth, async (req, res) => {
	try {
		//const task = await Task.findById(req.params.id);
		const task = await Task.findOne({
			_id: req.params.id,
			owner: req.user._id,
		});
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

router.post('/tasks', auth, async (req, res) => {
	try {
		//const task = new Task(req.body);
		const task = new Task({
			...req.body,
			owner: req.user._id,
		});
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

router.patch('/tasks/:id', auth, async (req, res) => {
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
		// const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
		// 	new: true,
		// 	runValidators: true,
		// });

		//const task = await Task.findById(req.params.id);
		const task = await Task.findOne({
			_id: req.params.id,
			owner: req.user._id,
		});

		if (!task) {
			return res.status(404).send();
		}

		updates.forEach(update => (task[update] = req.body[update]));
		await task.save();
		res.status(202).send(task);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.delete('/tasks/:id', auth, async (req, res) => {
	try {
		//const task = await Task.findByIdAndDelete(req.params.id);
		const task = await Task.findOneAndDelete({
			_id: req.params.id,
			owner: req.user._id,
		});

		if (!task) {
			return res.status(404).send();
		}
		res.send(task);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
