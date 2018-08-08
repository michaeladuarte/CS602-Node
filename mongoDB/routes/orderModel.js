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


//order schema
const orderSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    country: String,
    products: [{qty: Number, id: Number, title: String, unit_cost: Number}]
});

//export models
module.exports.getModel = 
	() => {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("orderModel", 
								orderSchema);
		};
		return model;
	};