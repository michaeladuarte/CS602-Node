var myObj = require('./employeeModule_v1');
var colors = require('colors');
/* The code below is unit testing the functionality of the methods
//lookup record by ID
let record =  myObj.lookupByID(1);
console.log('ID: ' + record.id + " first: " + record.firstName + " last: " + record.lastName);

//lookup records by last name
let records = myObj.lookupByLastName('Smiths');
console.log(records);

//add employee
myObj.addEmployee('Eric','Kutarnia');
let records2 = myObj.lookupByLastName('Kutarnia');
console.log(records2);
*/

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


console.log('Below is the fix for the modification issue'.blue.underline);
console.log('Lookup by id, 2, and assign the value to a variable.'.blue.underline);
let idfix = myObj.lookupByIDFixed(2);

console.log('Print the variable.'.blue.underline);
console.log(idfix);

console.log('Using the above variable, change the first name to MaryLou.'.blue.underline);
idfix.firstName = 'MaryLou';

console.log('Lookup again by id, 2, and print the result.'.blue.underline);
console.log(myObj.lookupByIDFixed(2));