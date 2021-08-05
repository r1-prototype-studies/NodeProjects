const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
	return loadNotes();
};

const addNote = function (title, body) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(function (note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.green('New note added!'));
	} else {
		console.log(chalk.red('Note title already taken!'));
	}
};

const removeNote = function (title) {
	const notes = loadNotes();
	const note = notes.filter(function (note) {
		return note.title === title;
	});
	if (note.length === 1) {
		console.log(chalk.green(`Deleting the note with title: ${title}`));
		notes.pop({
			note,
		});
		saveNotes(notes);
	} else {
		console.log(chalk.red(`Note with title: ${title} is not found`));
	}
};

const saveNotes = function (notes) {
	const data = JSON.stringify(notes);
	fs.writeFileSync('temp/notes.json', data);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync('temp/notes.json');
		const notesJSON = dataBuffer.toString();
		return JSON.parse(notesJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
};
