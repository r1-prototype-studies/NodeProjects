const request = require('supertest');
const app = require('../src/app');

test('Should sign up a new user', async () => {
	await request(app)
		.post('/users')
		.send({ name: 'moses', email: 'moses@gmail.com', password: 'test@123' })
		.expect(201);
});
