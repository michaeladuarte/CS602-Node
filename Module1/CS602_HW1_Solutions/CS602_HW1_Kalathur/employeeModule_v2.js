var _ = require('underscore');

var data = [
  {id:1, firstName:'John',lastName:'Smith'},
  {id:2, firstName:'Jane',lastName:'Smith'},
  {id:3, firstName:'John',lastName:'Doe'}
 ];

module.exports.lookupById = function (pid) {
	return _.findWhere(data, {id: pid});
};

module.exports.lookupByLastName = function (name) {
	return _.where(data, {lastName: name});
};

module.exports.addEmployee = function (fname, lname) {
	var max_id = 0;
	if (data.length > 0) {
	 	max_id = _.max(_.pluck(data, 'id'));
	}
	max_id++;
	data.push({id: max_id, firstName: fname, lastName: lname});
}
