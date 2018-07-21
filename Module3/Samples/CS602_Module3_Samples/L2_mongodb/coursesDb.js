var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var courseSchema = new Schema({
	courseNumber: String,
	courseName: String,
	courseDevelopers: [
		{firstName: String, lastName: String}
	]
});

module.exports = {
	getModel: function getModel(connection) {
		return connection.model("CourseModel", 
							courseSchema);
	}
}
