const request = require('request');
const accessToken =
	'pk.eyJ1IjoieWFnb3JvYmllIiwiYSI6ImNrcnpsZ293MTBhOTUycXRqZzdmaGZjYWoifQ.XAItOxeA42gBksW8YY9WqA';

const getLocation = (address, callback) => {
	const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}}.json?access_token=${accessToken}&$limit=1`;

	request({ url: mapUrl, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to the map service. Please try again later.');
		} else if (body.features.length === 0) {
			callback(
				`No matching location for ${address}. Try a different search term.`
			);
		} else {
			const data = {
				location: body.features[0].place_name,
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
			};
			callback('', data);
		}
	});
};

module.exports = {
	getLocation: getLocation,
};
