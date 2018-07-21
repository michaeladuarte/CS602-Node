var mysql = require("mysql");
var credentials = require("./credentials.js");

var connection = mysql.createConnection({
	"host": credentials.host, "port": 3306,
	"user": credentials.username,
	"password": credentials.password,
	"database": credentials.database
});

connection.connect(function(error) {
	if (error) {
		console.error(error);
		return;
	}
	// Connection successfully established
	console.log("Connected...");
});

// Do database operations

var newData = ['Oklahoma City'];

connection.query(
	"Delete from Weather Where city = ?", 
	newData,
	function(error, result) {
		if (error) {
			console.error(error);
			return;
		}
		console.log(result);
	});

connection.end(function(error) {
	if (error) {
		console.error(error);
		return;
	}
	// Connection successfully closed
	console.log("Closed...");
});















