const mongoose = require('mongoose');
const credentials = require("../credentials.js");
//DB Endpoint
const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection = null;
let model = null;

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const employeeSchema = new Schema({
	firstName: String,
	lastName: String,
});

module.exports.getModel = 
	() => {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("EmployeeModel", 
								employeeSchema);
		};
		return model;
	};