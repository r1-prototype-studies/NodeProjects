const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
	const renderData = {
		title: 'Weather App',
		name: 'R1 Enterprises',
	};
	res.render('index', renderData);
});

app.get('/about', (req, res) => {
	const renderData = {
		title: 'About',
		name: 'R1 Enterprises',
	};
	res.render('about', renderData);
});

app.get('/help', (req, res) => {
	const renderData = {
		title: 'Help',
		message: 'Reach out to us for help!!!',
	};
	res.render('help', renderData);
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
