var _ = require('underscore');

var data = [
    { id: 1, firstName: 'John', lastName: 'Smith' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'John', lastName: 'Doe' }
];

//look up by ID
var f1 = (value) => {
    let record = _.findWhere(data, { id:parseInt(value)});
    return record;
};
//look up by last name
var f2 = (value) => {
    //initialize return value
    let records = _.where(data, { lastName: "" + value });
    return records;
};
//add employee
var f3 = (first, Last) => {
    //find current maximum ID value
    let max = _.max(data, function (record) { return record.id; });
    let cID = max.id + 1;
    //push new employee
    data.push({ id: cID, firstName: '' + first, lastName: '' + Last });
    return cID;
};


module.exports = {
    lookupByID: f1,
    lookupByLastName: f2,
    addEmployee: f3
};