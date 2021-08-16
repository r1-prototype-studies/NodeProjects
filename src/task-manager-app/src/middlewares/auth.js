const jwt = require('jsonwebtoken');
const User = require('../models/users');

const auth = async (req, res, next) => {
	try {
		console.log(req.method, req.url);
		const token = req.header('Authorization').replace('Bearer ', '');
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findOne({
			_id: decoded._id,
			'tokens.token': token,
		});
		if (!user) {
			throw new Error();
		}
		req.user = user;
		req.token = token;
		next();
	} catch (error) {
		res.status(401).send({ error: 'Please Authenticate' });
	}
};

module.exports = auth;
