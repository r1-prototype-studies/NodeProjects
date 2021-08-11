require('../src/db/mongoose');
const User = require('../src/models/users');

//61102dfc43708c7b804932df

// User.findByIdAndUpdate('61102dfc43708c7b804932df', { age: 25 })
// 	.then(user => {
// 		console.log(user);
// 		return User.countDocuments({ age: 25 });
// 	})
// 	.then(result => console.log(result))
// 	.catch(err => {
// 		console.log(err);
// 	});

const updateAgeAndCount = async (id, age) => {
	await User.findByIdAndUpdate(id, {
		age,
	});
	const count = User.countDocuments({ age });
	return count;
};

updateAgeAndCount('61102dfc43708c7b804932df', 28).then(count => {
	console.log(count);
});
