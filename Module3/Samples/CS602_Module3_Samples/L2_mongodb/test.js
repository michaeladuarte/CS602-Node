var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema
var personSchema = new Schema({
	firstName: 'string',
	lastName: 'string'
});

// Optionally, add custom methods
personSchema.methods.printMe = 
	function() {
		console.log("I am", this.firstName + 
			' ' + this.lastName);
	};

// Create a Model
var Person = mongoose.model('PersonModel', 
			personSchema);

// create an instance
var john = new Person({
	firstName: 'John', lastName: 'Smith'
});
// invoke custom method
john.printMe();


