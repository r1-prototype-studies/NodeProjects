const mongoose = require('../src/db/mongoose');
const Task = require('../src/Models/tasks');

//ObjectId("6113db7867ba72468c9222f3") ObjectId("6113dae7e04e985bcc22b792")
// Task.findByIdAndDelete('6113dae7e04e985bcc22b792')

// 	.then(task => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then(result => {
// 		console.log(result);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

const deleteTaskAndCount = async id => {
	await Task.findByIdAndDelete(id);
	return await Task.countDocuments({ completed: false });
};

//ObjectId("611032ccbaa4cd8ec890e308")
deleteTaskAndCount('611032ccbaa4cd8ec890e308').then(result => {
	console.log(result);
});
