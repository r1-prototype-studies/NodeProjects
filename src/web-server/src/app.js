const mapService = require('./services/mapService');
const weatherService = require('./services/weatherService');
const path = require('path');
const express = require('express');
const hbs = require('hbs');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialViewsPath = path.join(__dirname, '../templates/partials');

// Set view engine for express
app.set('view engine', 'hbs');
// Set the views path. If the views path is "view", no need to set as below
app.set('views', viewsPath);

// Set the partial path
hbs.registerPartials(partialViewsPath);

// Set the public path for express
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
		name: 'R1 Enterprises',
	};
	res.render('help', renderData);
});

app.get('/weather', (req, res) => {
	var address = req.query.address;
	if (!address) {
		res.send({ error: 'Please enter an address' });
	}

	mapService.getLocation(
		address,
		(error, { latitude, longitude, location }) => {
			if (error) {
				res.send({ error });
			} else {
				getWeather(latitude, longitude, location);
			}
		}
	);

	const getWeather = (latitude, longitude, location) => {
		weatherService.getWeather(
			latitude,
			longitude,
			(error, { weather, temperature, feelslike, precip }) => {
				if (error) {
					res.send({ error });
				} else {
					res.send({
						forecast: `Weather in ${location} is ${weather}. It is currently ${temperature} degrees outside. It feels like ${feelslike} degrees out. There is a ${precip}% chance of rain`,
						address,
						location,
					});
				}
			}
		);
	};
});

app.get('/help/*', (req, res) => {
	const renderData = {
		title: 'Help',
		errorMessage: 'Help Article not found',
		name: 'R1 Enterprises',
	};
	res.render('404', renderData);
});

app.get('*', (req, res) => {
	const renderData = {
		title: '404',
		errorMessage: 'My 404 Page',
		name: 'R1 Enterprises',
	};
	res.render('404', renderData);
});

app.listen(12345, () => {
	console.log('Server is up and running on port 12345');
});
