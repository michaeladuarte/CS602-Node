var mongoose = require('mongoose');
var credentials = require("../credentials.js");

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = null;
var model = null;

var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var courseSchema = new Schema({
	courseNumber: String,
	courseName: String,
	courseDevelopers: [
		{firstName: String, lastName: String}
	]
});
// custom schema method
courseSchema.methods.getDeveloperNames = 
		function() {
			return this.courseDevelopers.map(
							function (elem){
								return elem.firstName + ' ' + 
											 elem.lastName;
							}).join(',');
		};

module.exports = {	
	getModel: function getModel() {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("CourseModel", 
								courseSchema);
		};
		return model;
	}
};
























