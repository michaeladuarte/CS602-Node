const EventEmitter = require('events').EventEmitter;
const _ = require('underscore');

// Custom class 
class EmployeeEmitter  extends EventEmitter {
	constructor(args) {
		super();
		this.data = args;
	}

	// member functions

	lookupById (pid) {
		this.emit('lookupById', pid);
		return _.findWhere(this.data, {id: pid});
	}

	lookupByLastName (name) {
		this.emit('lookupByLastName', name);
		return _.where(this.data, {lastName: name});
	}

	addEmployee (fname, lname) {
		this.emit('addEmployee', [fname, lname]);
		var max_id = 0;
		if (this.data.length > 0) {
		 	max_id = _.max(_.pluck(this.data, 'id'));
		}
		max_id++;
		this.data.push({id: max_id, firstName: fname, lastName: lname});
	}


}


module.exports.EmployeeEmitter = EmployeeEmitter;

