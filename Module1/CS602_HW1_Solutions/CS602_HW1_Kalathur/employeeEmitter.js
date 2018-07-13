var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
var _ = require('underscore');

// Custom class 
function EmployeeEmitter(args) {
	  this.data = args;
    EventEmitter.call(this);
}
inherits(EmployeeEmitter, EventEmitter);

// Sample member function that raises an event
EmployeeEmitter.prototype.lookupById = function (pid) {
	this.emit('lookupById', pid);
	return _.findWhere(this.data, {id: pid});
};

EmployeeEmitter.prototype.lookupByLastName = function (name) {
	this.emit('lookupByLastName', name);
	return _.where(this.data, {lastName: name});
};

EmployeeEmitter.prototype.addEmployee = function (fname, lname) {
	this.emit('addEmployee', [fname, lname]);
	var max_id = 0;
	if (this.data.length > 0) {
	 	max_id = _.max(_.pluck(this.data, 'id'));
	}
	max_id++;
	this.data.push({id: max_id, firstName: fname, lastName: lname});
}

module.exports.EmployeeEmitter = EmployeeEmitter;

