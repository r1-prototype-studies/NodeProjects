const {
	calculateTip,
	fahrenheitToCelsius,
	celsiusToFahrenheit,
	add,
} = require('../src/math');

test('Should calculate total with tip', () => {
	const total = calculateTip(10, 0.3);
	// if (total !== 13) {
	// 	throw new Error(`Total tip should be 13. Got: ${total}`);
	// }
	expect(total).toBe(13);
});

test('Should calculate total with no tip', () => {
	const total = calculateTip(10);
	expect(total).toBe(12);
});

test('Should convert F to C', () => {
	const celsius = fahrenheitToCelsius(212);
	expect(celsius).toBe(100);
});

test('Should convert F to C', () => {
	const celsius = fahrenheitToCelsius(32);
	expect(celsius).toBe(0);
});

test('Should convert C to F', () => {
	const celsius = celsiusToFahrenheit(100);
	expect(celsius).toBe(212);
});

test('Should convert C to F', () => {
	const celsius = celsiusToFahrenheit(0);
	expect(celsius).toBe(32);
});

// test('Test Async demo', done => {
// 	setTimeout(() => {
// 		expect(1).toBe(2);
// 		done();
// 	}, 2000);
// });

test('Should add 2 numbers', done => {
	add(1, 2).then(sum => {
		expect(sum).toBe(3);
		done();
	});
});

test('Should add 2 numbers async/await', async () => {
	const sum = await add(1, 2);
	expect(sum).toBe(3);
});
