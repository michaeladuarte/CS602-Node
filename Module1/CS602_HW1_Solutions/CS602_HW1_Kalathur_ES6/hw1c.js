const colors = require('colors');

const EmployeeEmitter = require('./employeeEmitter').EmployeeEmitter;

// Usage
const data = [
  {id:1, firstName:'John',lastName:'Smith'},
  {id:2, firstName:'Jane',lastName:'Smith'},
  {id:3, firstName:'John',lastName:'Doe'}
 ];

const employees = new EmployeeEmitter(data);

employees.on('lookupById', function (args) {
    console.log(colors.blue('Event lookupById raised! %s'), 
    	args);
});
employees.on('lookupByLastName', function (args) {
    console.log(colors.blue('Event lookupByLastName raised! %s'), 
    	args);
});
employees.on('addEmployee', function (args) {
    console.log(colors.blue('Event addEmployee raised! %s'), 
    	args);
});


console.log("\nLookup by last name (Smith)".red);
console.log(employees.lookupByLastName('Smith'));

console.log("\nAdding employee William Smith".red);
employees.addEmployee('William', 'Smith');

console.log("\nLookup by last name (Smith)".red);
console.log(employees.lookupByLastName('Smith'));

console.log("\nLookup by id (2)".red);
var e2 = employees.lookupById(2);
console.log(e2);



