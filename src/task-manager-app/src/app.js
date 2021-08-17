const express = require('express');
require('./db/mongoose'); // we don't need anything from this file but we need to run this file.
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();

// To make express use json
app.use(express.json());
// Different routes
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
