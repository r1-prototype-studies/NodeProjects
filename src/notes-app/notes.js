const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => loadNotes();

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find(note => note.title === title);

	if (!duplicateNote) {
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

const removeNote = title => {
	const notes = loadNotes();
	const note = notes.filter(note => note.title === title);
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

const saveNotes = notes => {
	const data = JSON.stringify(notes);
	fs.writeFileSync('temp/notes.json', data);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('temp/notes.json');
		const notesJSON = dataBuffer.toString();
		return JSON.parse(notesJSON);
	} catch (e) {
		return [];
	}
};

const listNotes = () => {
	console.log(chalk.bold.underline.inverse('Your Notes:- '));
	const savedNotes = getNotes();
	savedNotes.forEach(note =>
		console.log(`${savedNotes.indexOf(note) + 1}. ${note.title}`)
	);
};

const readNote = title => {
	const notes = loadNotes();
	const note = notes.find(note => note.title === title);
	if (note) {
		console.log(chalk.bold.inverse(note.title));
		console.log(note.body);
	} else {
		console.log(chalk.red('Note not found'));
	}
};

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	readNote: readNote,
	listNotes: listNotes,
};
