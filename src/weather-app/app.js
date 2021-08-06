const mapService = require('./mapService.js');
const weatherService = require('./weatherService.js');

const address = process.argv[2];

if (address) {
	mapService.getLocation(
		address,
		(error, { latitude, longitude, location }) => {
			if (error) {
				console.log('Error:', error);
			} else {
				//console.log('Data: ', data);
				getWeather(latitude, longitude, location);
			}
		}
	);
} else {
	console.error('Please provide an address');
}

const getWeather = (latitude, longitude, location) => {
	weatherService.getWeather(
		latitude,
		longitude,
		(error, { weather, temperature, feelslike, precip }) => {
			if (error) {
				console.log('Error:', error);
			} else {
				console.log(
					`Weather in ${location} is ${weather}. It is currently ${temperature} degrees outside. It feels like ${feelslike} degrees out. There is a ${precip}% chance of rain`
				);
			}
		}
	);
};
