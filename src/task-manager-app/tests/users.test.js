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
	console.log(userOne);
});

afterAll(() => {
	mongoose.disconnect();
});

test('Should sign up a new user', async () => {
	await request(app)
		.post('/users')
		.send({ name: 'adam', email: 'adam@gmail.com', password: 'test@123' })
		.expect(201);
});

test('Should login existing user', async () => {
	await request(app)
		.post('/users/login')
		.send({ email: userOne.email, password: userOne.password })
		.expect(200);
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

test('Should get profile for user', async () => {
	await request(app)
		.delete('/users')
		.set('Authorization', `Bearer ${userOne.tokens[0].token}`)
		.send()
		.expect(200);
});

test('Should not get profile for unauthenticated user', async () => {
	await request(app).delete('/users').send().expect(401);
});
