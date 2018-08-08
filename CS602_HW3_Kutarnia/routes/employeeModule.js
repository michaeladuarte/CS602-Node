var _ = require('underscore');
const DB = require('./employeeDb.js');
const Employee = DB.getModel();

//add employee
var f1 = (req, res, next) => {
    res.render('addEmployeeView',
        { title: "Add an Employee" });
};
//delete employees
var f2 = (req, res, next) => {
    let id = req.params.id;
    Employee.findById(id, (err, employee) => {
        if (err)
            console.log("Error Selecting : %s ", err);
        if (!employee)
            return res.render('404');

        employee.remove((err) => {
            if (err)
                console.log("Error deleting : %s ", err);
            res.redirect('/employees');
        });
    });
};
//display employees(render courses)
var f3 = (req, res, next) => {
    //use find function to get all employees
    Employee.find({}, (err, employees) => {
        if (err)
            console.log("Error : %s ", err);
        //map the results of the find
        let results = employees.map((employee) => {
            return {
                id: employee.id,
                firstName: employee.firstName,
                lastName: employee.lastName
            }
        });
        res.render('displayEmployeesView',
            { title: "List of Employees", data: results });
    });
};
//edit employee
var f4 = (req, res, next) => {
    let id = req.params.id;
    Employee.findById(id, (err, employee) => {
        if (err)
            console.log("Error Selecting : %s ", err);
        if (!employee)
            return res.render('404');
        //render edit view passing data from find
        res.render('editEmployeeView',
            {
                title: "Edit Employee",
                data: {
                    id: employee.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName
                }
            });
    });
};
//save employee
var f5 = (req, res, next) => {
    let employee = new Employee({
        firstName: req.body.fName,
        lastName: req.body.lName
    });

    employee.save((err) => {
        if (err)
            console.log("Error : %s ", err);
        res.redirect('/employees');
    });
};
//save after edit
var f6 = (req, res, next) => {
    let id = req.params.id;

    Employee.findById(id, (err, employee) => {
        if (err)
            console.log("Error Selecting : %s ", err);
        if (!employee)
            return res.render('404');
        //get names from request body
        employee.firstName = req.body.fName;
        employee.lastName = req.body.lName;
        //save employee
        employee.save((err) => {
            if (err)
                console.log("Error updating : %s ", err);
            res.redirect('/employees');
        });
    });
};


module.exports = {
    addEmployee: f1,
    deleteEmployee: f2,
    displayEmployees: f3,
    editEmployee: f4,
    saveEmployee: f5,
    saveAferEdit: f6
};