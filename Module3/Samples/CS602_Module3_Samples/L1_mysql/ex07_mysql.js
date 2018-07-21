var mysql = require("mysql");
var credentials = require("./credentials.js");

var pool = mysql.createPool({
	"host": credentials.host, "port": 3306,
	"user": credentials.username,
	"password": credentials.password,
	"database": credentials.database
});

pool.getConnection(function(error, connection) {
	if (error) {
		console.error(error);
		return;
	}
	// Connection successfully established
	console.log("Connection from pool...");
  
  // Do database operations

  connection.query("Select * from Weather",
	function(error, rows) {
		if (error) {
			console.error(error);
			return;
		}
		console.log(rows);
	});

  // Release the connection to the pool
	connection.release();

});
















