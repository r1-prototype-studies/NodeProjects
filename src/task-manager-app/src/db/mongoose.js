const mongoose = require('mongoose');

const connectionUrl =
	'mongodb+srv://admin:admin@cluster0.ju4ey.mongodb.net/task-manager-api?retryWrites=true&w=majority';

mongoose.connect(connectionUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true, // When Mongoose interacts with DB, it interacts with index and the operations will be quicker
	useFindAndModify: false, // To resolve the deprecation message. https://mongoosejs.com/docs/deprecations.html#findandmodify
});

// const me = new User({
// 	name: 'Joshua',
// 	email: 'JOSHUA@gmail.com',
// 	password: 'test@123',
// });

// me.save()
// 	.then(result => console.log(result))
// 	.catch(error => console.log('Error!', error));

// const task = new Task({
// 	description: 'Third Task',
// 	//completed: false,
// });

// task
// 	.save()
// 	.then(result => console.log(result))
// 	.catch(error => console.log('Error!', error));
