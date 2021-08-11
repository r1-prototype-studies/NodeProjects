const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;
