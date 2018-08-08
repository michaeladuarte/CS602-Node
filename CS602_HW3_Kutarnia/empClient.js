const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl);

const EmployeeDb = require('./routes/employeeDb.js');
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
		console.log("Successfully added: " + employee.firstName + ' ' + employee.lastName);
    });

	let employee1;
    employee1 = new Employee({
		firstName: 'Jane',
		lastName: 'Smith'
	});  
	employee1.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Successfully added: " + employee1.firstName + ' ' + employee1.lastName);
    });

	let employee2;
    employee2 = new Employee({
		firstName: 'John',
		lastName: 'Doe'
	});  
	employee2.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Successfully added: " + employee2.firstName + ' ' + employee2.lastName);
	});
});










