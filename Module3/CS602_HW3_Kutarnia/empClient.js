const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl);

const EmployeeDb = require('./employeeDb.js');
const Employee = EmployeeDb.getModel(connection);

connection.on("open", () => {
	
	// create and save document objects
	let employee;

	employee = new Employee({
		firstName: 'John',
		lastName: 'Smith'
	});  
	employee.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Successfully added: " + employee.firstName);
    });

    employee = new Employee({
		firstName: 'Jane',
		lastName: 'Smith'
	});  
	employee.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Successfully added: " + employee.firstName);
    });

    employee = new Employee({
		firstName: 'John',
		lastName: 'Doe'
	});  
	employee.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Successfully added: " + employee.firstName);
	});
	
});









