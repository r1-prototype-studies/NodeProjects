const request = require('supertest');
const jwt = require('jsonwebtoken');
const { app, mongoose } = require('../src/app');
const User = require('../src/models/users');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
	_id: userOneId,
	name: 'Matthew',
	email: 'Matthew@gmail.com',
	password: '123456789',
	tokens: [{ token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET) }],
};

beforeEach(async () => {
	await User.deleteMany();
	await new User(userOne).save();
});

afterAll(() => {
	mongoose.disconnect();
});

test('Should sign up a new user', async () => {
	const response = await request(app)
		.post('/users')
		.send({ name: 'adam', email: 'adam@gmail.com', password: 'test@123' })
		.expect(201);

	// Assert that the database was changed correctly
	const user = await User.findById(response.body.user._id);
	expect(user).not.toBeNull();

	// Assertions about the response
	expect(response.body.user.name).toBe('adam');
	expect(response.body).toMatchObject({
		user: {
			name: 'adam',
			email: 'adam@gmail.com',
		},
		token: user.tokens[0].token,
	});
	expect(user.password).not.toBe('test@123');
});

test('Should login existing user', async () => {
	const response = await request(app)
		.post('/users/login')
		.send({ email: userOne.email, password: userOne.password })
		.expect(200);
	const user = await User.findById(userOneId);
	expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not login non existing user', async () => {
	await request(app)
		.post('/users/login')
		.send({ email: userOne.email, password: '123' })
		.expect(400);
});

test('Should get profile for user', async () => {
	await request(app)
		.get('/users/me')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);
});

test('Should not get profile for unauthenticated user', async () => {
	await request(app).get('/users/me').send().expect(401);
});

test('Should delete profile for user', async () => {
	await request(app)
		.delete('/users')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);

	const user = await User.findById(userOneId);
	expect(user).toBeNull();
});

test('Should not get delete for unauthenticated user', async () => {
	await request(app).delete('/users').send().expect(401);
});
