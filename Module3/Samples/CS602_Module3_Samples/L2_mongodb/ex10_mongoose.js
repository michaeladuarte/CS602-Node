var mongoose = require('mongoose');
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = mongoose.createConnection(dbUrl);

var CourseDb = require('./coursesDb.js');
var Course = CourseDb.getModel(connection);

connection.on("open", function(){
	
	// Find all courses
	Course.find({}, 'courseName courseNumber', 
		function(err, results) {
			if (err) throw err;
			console.log("\nFind all courses");
			console.log(results);
	});

	
	Course.find({courseNumber: 'cs602'}, 
		function(err, results) {
			if (err) throw err;
			console.log("\nFind cs602");
			console.log(results);
	});

	Course.find({courseDevelopers: {$not: {$size: 1}}}, 
		function(err, results) {
			connection.close();
			if (err) throw err;
			console.log("\nCourses with multiple develeopers");
			console.log(results);
	});
	
});

























