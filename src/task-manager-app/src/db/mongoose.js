const mongoose = require('mongoose');

const connectionUrl = process.env.DB_CONNECTION;

mongoose.connect(connectionUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true, // When Mongoose interacts with DB, it interacts with index and the operations will be quicker
	useFindAndModify: false, // To resolve the deprecation message. https://mongoosejs.com/docs/deprecations.html#findandmodify
	autoIndex: true, // To resolve unique index issues https://dev.to/akshatsinghania/mongoose-unique-not-working-16bf
});

module.exports = mongoose;
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
