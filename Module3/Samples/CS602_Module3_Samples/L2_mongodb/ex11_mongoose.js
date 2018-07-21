var mongoose = require('mongoose');
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = mongoose.createConnection(dbUrl);

var CourseDb = require('./coursesDb.js');
var Course = CourseDb.getModel(connection);

connection.on("open", function(){
	
	/* // Update
	Course.update({courseNumber: 'cs701'}, 
			{courseName: 'Rich Internet App Development'}, 
		function(err, result) {
			connection.close();
			if (err) throw err;
			console.log("\nUpdate...");
			console.log("Affected docs:", result);
	});
 */
	// Update multiple documents
	Course.update({}, 
			{courseName: 'Web Development Course'}, 
			{multi: true},
		function(err, result) {
			connection.close();
			if (err) throw err;
			console.log("\nUpdate...");
			console.log("Affected docs:", result);
	});
});

























