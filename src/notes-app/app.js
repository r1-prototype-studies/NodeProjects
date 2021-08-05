const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// const command = process.argv[2];
// if (command === 'add') {
// 	console.log('Adding note!');
// } else if (command === 'remove') {
// 	console.log('Removing note!');
// }

// console.log(process.argv);
// console.log(yargs.argv);

// Customizes yargs version
yargs.version('1.1.1');

// Create an Add command
yargs.command({
	command: 'add',
	description: 'Add a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true, // Makes it mandatory
			type: 'string',
		},
		body: {
			describe: 'Note body',
			demandOption: true, // Makes it mandatory
			type: 'string',
		},
	},
	handler: function (argv) {
		console.log('Title: ', argv.title);
		console.log('Body: ', argv.body);
	},
});

// Create a Remove command
yargs.command({
	command: 'remove',
	description: 'Remove a note',
	handler: function () {
		console.log('Removed note!');
	},
});

// Create a Read command
yargs.command({
	command: 'read',
	description: 'Read a note',
	handler: function () {
		console.log('Read note!');
	},
});

// Create a List command
yargs.command({
	command: 'list',
	description: 'List your notes',
	handler: function () {
		console.log('List note!');
	},
});

yargs.parse();
