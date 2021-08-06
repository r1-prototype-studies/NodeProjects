const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.send('<h1> Hello Visitor! </h1>');
});

app.get('/help', (req, res) => {
	const help = {
		name: 'Adam',
		Age: 25,
	};
	res.send(help);
});

app.get('/about', (req, res) => {
	res.send('<h1>About </h1>');
});

app.get('/weather', (req, res) => {
	const data = {
		location: 'philadelphia',
		forecast: 'It is sunny.',
	};
	res.send(data);
});

app.listen(12345, () => {
	console.log('Server is up and running on port 12345');
});
