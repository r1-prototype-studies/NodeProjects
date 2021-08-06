const request = require('request');
const apiKey = '6637c8d7a2df469dea2117ded3eaec77';
const unit = 'f'; // m s

const getWeather = (latitude, longitude, callback) => {
	const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}&units=${unit}`;

	request({ url: weatherUrl, json: true }, (error, { body }) => {
		if (error) {
			callback(
				'Unable to connect to the weather service. Please try again later.'
			);
		} else if (body.error) {
			callback('Location not found');
		} else {
			const data = {
				weather: body.current.weather_descriptions[0],
				temperature: body.current.temperature,
				feelslike: body.current.feelslike,
				precip: body.current.precip,
			};
			callback('', data);
		}
	});
};

module.exports = {
	getWeather: getWeather,
};
