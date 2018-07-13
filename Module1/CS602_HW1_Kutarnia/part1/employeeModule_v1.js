var data = [
    {id:1, firstName:'John',lastName:'Smith'},
    {id:2, firstName:'Jane',lastName:'Smith'},
    {id:3, firstName:'John',lastName:'Doe'}
];

var f1 = (value) => {
    //initialize return value
    let record =undefined;
    //loop over data set and return record
    for (let n of data) {
        if (n.id == value){
            record=n;
            break;
        }
    }
	return record;
};
var f2 = (value) => {
	//initialize return value
    let records =[];
    //loop over data set and return records
    for (let n of data) {
        if (n.lastName == value){
            records.push(n);
        }
    }
	return records;
};
var f3 = (first,Last) => {
    //find current maximum ID value
    let max = 0;
    for (let n of data) {
        if(max < n.id)
        max = n.id + 1;
    }
    //push new employee
	data.push({id:max, firstName:''+first,lastName:''+Last});
};

var f4 = (value) => {
    //initialize return value
    let record =undefined;
    //loop over data set and return record
    for (let n of data) {
        if (n.id == value){
            record=n;
            break;
        }
    }
	return {id:record.id, firstName:record.firstName,lastName:record.lastName}
};

module.exports = {
	lookupByID: f1,
	lookupByLastName: f2,
    addEmployee:  f3,
    lookupByIDFixed: f4
};