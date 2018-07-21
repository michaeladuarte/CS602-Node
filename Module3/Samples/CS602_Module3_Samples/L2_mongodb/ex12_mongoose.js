var mongoose = require('mongoose');
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = mongoose.createConnection(dbUrl);

var CourseDb = require('./coursesDb.js');
var Course = CourseDb.getModel(connection);

connection.on("open", function(){
	
	/*  // Delete documents
	Course.remove({courseNumber: 'cs602'}, 
		function(err, result) {
			connection.close();
			if (err) throw err;
			console.log("\Delete...");
			console.log("Affected docs:", result);
	});
  */
	Course.remove({courseName: 
				{ "$regex": "Web", "$options": "i" }}, 
		function(err, result) {
			connection.close();
			if (err) throw err;
			console.log("\Delete...");
			console.log("Affected docs:", result);
	});

});















































