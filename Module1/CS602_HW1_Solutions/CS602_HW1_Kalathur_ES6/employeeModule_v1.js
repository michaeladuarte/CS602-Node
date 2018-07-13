const data = [
  {id:1, firstName:'John',lastName:'Smith'},
  {id:2, firstName:'Jane',lastName:'Smith'},
  {id:3, firstName:'John',lastName:'Doe'}
 ];

module.exports.lookupById =  
	pid => {
		var result = undefined;
		for (var entry of data) {
			if (entry.id == pid) {
				result = entry;
				break;
			}
		}
		return result;
	};

module.exports.lookupByLastName = 
	name => {
		var result = [];
		for (var entry of data) {
			if (entry.lastName == name) {
				result.push(entry);
			}
		}
		return result;
	};

module.exports.addEmployee = 
	(fname, lname) => {
		var max_id = 0;
		for (var entry of data) {
			if (entry.id > max_id) {
				max_id = entry.id;
			}
		}
		max_id++;
		data.push({id: max_id, firstName: fname, lastName: lname});
	}
