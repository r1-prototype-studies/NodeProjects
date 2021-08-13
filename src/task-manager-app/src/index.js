const express = require('express');
require('./db/mongoose'); // we don't need anything from this file but we need to run this file.
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 12345;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log(`Application is started and running at ${port}`);
});
