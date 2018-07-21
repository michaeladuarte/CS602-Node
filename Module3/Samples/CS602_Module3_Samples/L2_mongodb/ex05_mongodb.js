var MongoClient = require('mongodb').MongoClient;
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

MongoClient.connect(dbUrl, function (err, client) {
	if (err) throw err;
	console.log('Successfully connected');
	
	var collection = client.db(credentials.database).collection('people');
	
	collection.find({lastName: 'Smith'}).toArray(
		function (err, docs) {
			console.log("Search by lastName:\n", docs);
	});
	
	collection.find({firstName: 'John'}).toArray(
		function (err, docs) {
			console.log("Search by firstName:\n", docs);
	});
	
	collection.find({firstName: 'John', lastName: 'Smith'}).toArray(
		function (err, docs) {
			console.log("Search by first and last Name:\n", docs);
			client.close();
	});
});
