const _ = require('underscore');

const data = [
  {id:1, firstName:'John',lastName:'Smith'},
  {id:2, firstName:'Jane',lastName:'Smith'},
  {id:3, firstName:'John',lastName:'Doe'}
 ];

module.exports.lookupById =  
	pid => {
		return _.findWhere(data, {id: pid});
	};

module.exports.lookupByLastName = 
	name => {
		return _.where(data, {lastName: name});
	};

module.exports.addEmployee = 
	(fname, lname) => {
		var max_id = 0;
		if (data.length > 0) {
		 	max_id = _.max(_.pluck(data, 'id'));
		}
		max_id++;
		data.push({id: max_id, firstName: fname, lastName: lname});
	}
