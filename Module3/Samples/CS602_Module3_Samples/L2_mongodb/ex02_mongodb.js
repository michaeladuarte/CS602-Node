var MongoClient = require('mongodb').MongoClient;
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var newData = { firstName: 'John', lastName: 'Doe' };

MongoClient.connect(dbUrl, function (err, client) {
	if (err) throw err;
	console.log('Successfully connected');
	
	var collection = client.db(credentials.database).collection('people');
	
	collection.insert(newData, function (err, docs) {
		console.log('Inserted Count:', docs.insertedCount);
		console.log('Inserted Ids:', docs.insertedIds);
		console.log('Data ID:', newData);
		
		client.close();
	});
});
