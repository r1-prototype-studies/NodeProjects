const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

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
