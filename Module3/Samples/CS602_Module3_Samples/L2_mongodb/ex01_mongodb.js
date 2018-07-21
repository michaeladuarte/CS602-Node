var MongoClient = require('mongodb').MongoClient;
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;
console.log(dbUrl);

MongoClient.connect(dbUrl, function (err, client) {
		if (err) throw err;
		console.log('Successfully connected to', 
			client.s.options.dbName);

		// Do database operations
		
		client.close();
});
