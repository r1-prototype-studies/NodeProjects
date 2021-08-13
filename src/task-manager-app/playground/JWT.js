const jwt = require('jsonwebtoken');
const myFunction = async () => {
	const token = jwt.sign({ _id: 'test' }, 'Testing', {
		expiresIn: '1 seconds',
	});
	console.log(token);

	const data = jwt.verify(token, 'Testing');
	console.log(data);
};
myFunction();
