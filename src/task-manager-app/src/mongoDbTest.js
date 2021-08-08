// CRUD operations
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl =
	'mongodb+srv://admin:admin@cluster0.ju4ey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const databaseName = 'task-manager';

// const id = new ObjectId();
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

// useNewUrlParser --> to parse the url correctly
const client = new MongoClient(connectionUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((error, client) => {
	if (error) {
		return console.log(`Unable to connect to database: ${error}`);
	}

	const db = client.db(databaseName);

	// Insert One record
	// db.collection('users').insertOne(
	// 	{
	// 		//_id: id,
	// 		name: 'Enoch',
	// 		age: 31,
	// 	},
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(result);
	// 	}
	// );

	// Insert multiple records
	// db.collection('users').insertMany(
	// 	[
	// 		{
	// 			name: 'Eve',
	// 			age: 25,
	// 		},
	// 		{
	// 			name: 'Noah',
	// 			age: 25,
	// 		},
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(result);
	// 	}
	// );

	// db.collection('tasks').insertMany(
	// 	[
	// 		{
	// 			description: 'Task 1',
	// 			completed: false,
	// 		},
	// 		{
	// 			description: 'Task 2',
	// 			completed: false,
	// 		},
	// 		{
	// 			description: 'Task 3',
	// 			completed: false,
	// 		},
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(result);
	// 	}
	// );

	// Select a document
	// db.collection('users').findOne({ name: 'Enoch' }, (error, data) => {
	// 	if (error) {
	// 		return console.log(error);
	// 	}
	// 	console.log(data);
	// });

	// db.collection('users').findOne(
	// 	{ _id: new ObjectId('610f760cea2bd6f345e822cf') },
	// 	(error, data) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(data);
	// 	}
	// );

	// db.collection('users')
	// 	.find({ name: 'Adam' })
	// 	.toArray((error, data) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(data);
	// 	});

	// db.collection('users')
	// 	.find({ name: 'Adam' })
	// 	.count((error, data) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(data);
	// 	});

	// db.collection('tasks').findOne(
	// 	{ _id: new ObjectId('610f786ea44973decd14a3e4') },
	// 	(error, data) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(data);
	// 	}
	// );

	// db.collection('tasks')
	// 	.find({ completed: false })
	// 	.toArray((error, data) => {
	// 		if (error) {
	// 			return console.log(error);
	// 		}
	// 		console.log(data);
	// 	});

	// Update a record in the database.
	// db.collection('users')
	// 	.updateOne(
	// 		{
	// 			_id: new ObjectId('610f731a39f6c87ae55b02f1'),
	// 		},
	// 		{
	// 			$set: {
	// 				name: 'Issac',
	// 			},
	// 		}
	// 	)
	// 	.then(result => {
	// 		console.log(result);
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	});

	// db.collection('users')
	// 	.updateOne(
	// 		{
	// 			name: 'Issac',
	// 		},
	// 		{
	// 			$inc: {
	// 				age: 1,
	// 			},
	// 		}
	// 	)
	// 	.then(result => {
	// 		console.log(result);
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	});

	// Update many
	// db.collection('tasks')
	// 	.updateMany({ completed: false }, { $set: { completed: true } })
	// 	.then(result => console.log(result))
	// 	.catch(error => console.log(error));

	// db.collection('users')
	// 	.deleteMany({ age: 25 })
	// 	.then(result => console.log(result))
	// 	.catch(error => console.log(error));

	db.collection('tasks')
		.deleteOne({ description: 'Task 1' })
		.then(result => console.log(result))
		.catch(error => console.log(error));

	//client.close();
});
