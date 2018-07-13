var employees = require('./employeeModule_v2');
var colors = require('colors');


console.log("\nLookup by last name (Smith)".red);
console.log(employees.lookupByLastName('Smith'));

console.log("\nAdding employee William Smith".red);
employees.addEmployee('William', 'Smith');

console.log("\nLookup by last name (Smith)".red);
console.log(employees.lookupByLastName('Smith'));

console.log("\nLookup by id (2)".red);
var e2 = employees.lookupById(2);
console.log(e2);

console.log("\nChanging first name...".red);

if (e2 != undefined) {
	e2.firstName = 'Mary';
}

console.log("\nLookup by id (2)".red);
var e2 = employees.lookupById(2);
console.log(e2);

console.log("\nLookup by last name (Smith)".red);
console.log(employees.lookupByLastName('Smith'));
