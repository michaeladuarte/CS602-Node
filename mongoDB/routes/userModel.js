const mongoose = require('mongoose');
const credentials = require("../credentials.js");

//DB Endpoint
const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection = null;
let model = null;

//schemas
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//User Schema
const userSchema = new Schema({
    id: String,
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    role: {type: [String], require: true}
    })

//export models
module.exports.getModel = 
	() => {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("userModel", 
								userSchema);
		};
		return model;
	};