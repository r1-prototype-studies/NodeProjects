const mapService = require('./mapService.js');
const weatherService = require('./weatherService.js');

mapService.getLocation('Boston', (error, data) => {
	if (error) {
		console.log('Error:', error);
	} else {
		console.log('Data: ', data);

		weatherService.getWeather(
			data.latitude,
			data.longitude,
			(error, weatherData) => {
				if (error) {
					console.log('Error:', error);
				} else {
					console.log(
						`Weather in ${data.location} is ${weatherData.weather}. It is currently ${weatherData.temperature} degrees outside. It feels like ${weatherData.feelslike} degrees out. There is a ${weatherData.precip}% chance of rain`
					);
				}
			}
		);
	}
});
