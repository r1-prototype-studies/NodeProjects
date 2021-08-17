const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Application is started and running at ${port}`);
});
