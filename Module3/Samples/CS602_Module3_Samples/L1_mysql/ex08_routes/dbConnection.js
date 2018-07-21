var connection = null;
var credentials = require("../credentials.js");

module.exports.dbConnect  = 
	function (){
	 if (connection == null) {
    	connection = require('mysql').createConnection({
        	"host": credentials.host, "port": 3306,
			"user": credentials.username,
			"password": credentials.password,
			"database": credentials.database
    	});
   	 }
   	 return connection;
	};


