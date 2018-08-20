const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

/*
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (error, result) => {
		if (error) {
			return console.log('Unable to insert todo', error)
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});


	db.collection('Users').insertOne({
		name: 'Miguel',
		age: 34,
		location: 'Madrid'
	}, (error, result) => {
		if (error) {
			return console.log('Unable to insert user', error)
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
*/

	db.close();
});