const bcrypt = require('bcryptjs');
const myFunction = async () => {
	const password = 'test123';
	const hashPassword = await bcrypt.hash(password, 8);

	console.log(password);
	console.log(hashPassword);

	const isMatch = await bcrypt.compare(password, hashPassword);
	console.log(isMatch);
};
myFunction();
