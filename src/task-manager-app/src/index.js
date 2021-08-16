const express = require('express');
require('./db/mongoose'); // we don't need anything from this file but we need to run this file.
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT;

// Set up Maintenance
// app.use((req, res, next) => {
// 	res.status(503).send('Under Maintenance. Try again later');
// });

// To make express use json
app.use(express.json());
// Different routes
app.use(userRouter);
app.use(taskRouter);
app.get('/testing', (req, res) => {
	console.log('Testing endpoint');
	res.send('App is up and running');
});

app.listen(port, () => {
	console.log(`Application is started and running at ${port}`);
});
