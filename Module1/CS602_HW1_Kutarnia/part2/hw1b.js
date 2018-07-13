var myObj = require('./employeeModule_v2');
var colors = require('colors');

//steps from HW assignment
console.log('Lookup by last name, Smith, and print the results.'.red.underline);
console.log(JSON.stringify(myObj.lookupByLastName('Smith')));

console.log('Add a new employee with first name, William, and last name, Smith.'.red.underline);
myObj.addEmployee('William','Smith');

console.log('Lookup by last name, Smith, and print the results. '.red.underline);
console.log(JSON.stringify(myObj.lookupByLastName('Smith')));

console.log('Lookup by id, 2, and assign the value to a variable.'.red.underline);
let id2 = myObj.lookupByID(2);

console.log('Print the variable.'.red.underline);
console.log(id2);

console.log('Using the above variable, change the first name to Mary.'.red.underline);
id2.firstName = 'Mary';

console.log('Lookup again by id, 2, and print the result.'.red.underline);
console.log(myObj.lookupByID(2));

console.log('Lookup by last name, Smith, and print the results.'.red.underline);
console.log(JSON.stringify(myObj.lookupByLastName('Smith')));

