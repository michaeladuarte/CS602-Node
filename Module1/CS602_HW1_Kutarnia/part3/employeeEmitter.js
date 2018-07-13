const EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var colors = require('colors');

//custom class
class EmployeeEmitter extends EventEmitter{
    constructor(args) {
        //call super constructor
        super();
        //set instance variable to data array input
        this.data = args;
    }
}

//functions that emit events when called
EmployeeEmitter.prototype.lookupById = function (args) {
    this.emit('lookupById',args);   
    let record = _.findWhere(this.data,{id:args});
    return record;
}
EmployeeEmitter.prototype.lookupByLastName = function (args) {
    this.emit('lookupByLastName',args);
    let records = _.where(this.data,{lastName:""+args});
    return records;
}
EmployeeEmitter.prototype.addEmployee = function (first,last) {
    this.emit('addEmployee',first, last);
    let max = _.max(this.data,function(record){ return record.id; }); 
    cID = max.id + 1; 
    //push new employee
	this.data.push({id:cID, firstName:''+ first, lastName:''+last});
}
//export EmployeeEmitter
module.exports = {EmployeeEmitter};