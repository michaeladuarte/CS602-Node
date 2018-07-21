var mongoose = require('mongoose');
var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = mongoose.createConnection(dbUrl);

var CourseDb = require('./coursesDb.js');
var Course = CourseDb.getModel(connection);

connection.on("open", function(){
	
	// create and save document objects
	var course;

	course = new Course({
		courseNumber: 'cs601',
		courseName: 'Web Application Development',
		courseDevelopers: [
			{ firstName: 'Eric',lastName: 'Bishop'}
		]
	}); 
	course.save();

	course = new Course({
		courseNumber: 'cs602',
		courseName: 'Server Side Web Development',
		courseDevelopers: [
			{ firstName: 'Eric', lastName: 'Bishop'},
			{ firstName: 'Suresh',lastName: 'Kalathur'}
		]
	}); 
	course.save();

	course = new Course({
		courseNumber: 'cs701',
		courseName: 'RIA',
		courseDevelopers: [
			{ firstName: 'Suresh',lastName: 'Kalathur'}
		]
	}); 
	course.save(function(err) {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
	
});










