const express = require('express');
require('./db/mongoose'); // we don't need anything from this file but we need to run this file.
const User = require('./models/users');
const Task = require('./models/tasks');

const app = express();
const port = process.env.PORT || 12345;

app.use(express.json());

app.get('/users', (req, res) => {
	User.find()
		.then(user => res.status(200).send(user))
		.catch(error => res.status(500).send(error));
});

app.get('/users/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => {
			if (!user) {
				res.status(404).send();
			}
			res.status(200).send(user);
		})
		.catch(error => res.status(500).send(error));
});

app.get('/tasks', (req, res) => {
	Task.find()
		.then(task => res.status(200).send(task))
		.catch(error => res.status(500).send(error));
});

app.get('/tasks/:id', (req, res) => {
	Task.findById(req.params.id)
		.then(task => {
			if (!task) {
				res.status(404).send();
			}
			res.status(200).send(task);
		})
		.catch(error => res.status(500).send(error));
});

app.post('/users', (req, res) => {
	const user = new User(req.body);
	user
		.save()
		.then(() => res.status(201).send(user))
		.catch(error => {
			res.status(400);
			res.send(error);
		});
});

app.post('/tasks', (req, res) => {
	const task = new Task(req.body);
	task
		.save()
		.then(() => res.status(201).send(task))
		.catch(error => {
			res.status(400);
			res.send(error);
		});
});

app.listen(port, () => {
	console.log(`Application is srarted and running at ${port}`);
});
