const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
	const user = this;

	// Hash the password only if it is not
	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	console.log(user.password);

	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
