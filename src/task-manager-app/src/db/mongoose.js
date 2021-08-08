const mongoose = require('mongoose');
const validator = require('validator');

const connectionUrl =
	'mongodb+srv://admin:admin@cluster0.ju4ey.mongodb.net/task-manager-api?retryWrites=true&w=majority';

mongoose.connect(connectionUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true, // When Mongoose interacts with DB, it interacts with index and the operations will be quicker
});

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		},
		trim: true,
		lowercase: true,
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 6,
		validate(value) {
			if (value.includes('password')) {
				throw new Error("password should not have 'password' in it");
			}
		},
	},
});

const Task = mongoose.model('Task', {
	description: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

// const me = new User({
// 	name: 'Joshua',
// 	email: 'JOSHUA@gmail.com',
// 	password: 'test@123',
// });

// me.save()
// 	.then(result => console.log(result))
// 	.catch(error => console.log('Error!', error));

const task = new Task({
	description: 'Third Task',
	//completed: false,
});

task
	.save()
	.then(result => console.log(result))
	.catch(error => console.log('Error!', error));
