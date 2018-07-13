const EmployeeEmitter = require('./employeeEmitter');
var colors = require('colors');
//data
var data = [
    {id:1, firstName:'John',lastName:'Smith'},
    {id:2, firstName:'Jane',lastName:'Smith'},
    {id:3, firstName:'John',lastName:'Doe'}
];

//instantiate EmployeeEmitter passing data array
const empEmitter = new EmployeeEmitter.EmployeeEmitter(data);

//create subscriber events
empEmitter.on('lookupById',function(args){
    console.log(colors.blue.underline('Event lookupById raised!: %s'), args);
});
empEmitter.on('lookupByLastName',function(args){
    console.log(colors.blue.underline('Event lookupByLastName raised!: %s'), args);
});
empEmitter.on('addEmployee',function(arg1,arg2){
    console.log(colors.blue.underline('Event addEmployee raised!: %s %s'), arg1,arg2);
});

//steps from HW assignment to call function which does work and emits event with response
console.log('Lookup by last name, Smith, and print the results.'.red.underline);
console.log(JSON.stringify(empEmitter.lookupByLastName('Smith')));

console.log('Add a new employee with first name, William, and last name, Smith.'.red.underline);
empEmitter.addEmployee('William','Smith')

console.log('Lookup by last name, Smith, and print the results. '.red.underline);
console.log(JSON.stringify(empEmitter.lookupByLastName('Smith')));

console.log('Lookup by id, 2'.red.underline);
console.log(JSON.stringify(empEmitter.lookupById(2)));
