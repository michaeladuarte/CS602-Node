const express = require('express');
const router = express.Router();

// other modules

const employeeModule = require("./employeeModule");

const displayEmployees 	= employeeModule.displayEmployees;
const addEmployee 		= employeeModule.addEmployee;
const saveEmployee		= employeeModule.saveEmployee;
const editEmployee 		= employeeModule.editEmployee;
const saveAfterEdit 	= employeeModule.saveAferEdit;
const deleteEmployee 		= employeeModule.deleteEmployee;

// router specs
router.get('/', (req, res, next) => {
  res.redirect('/employees');
});

router.get('/employees', 				displayEmployees);

router.get('/employees/add', 			addEmployee);
router.post('/employees/add', 		saveEmployee);

router.get('/employees/edit/:id', 	editEmployee);
router.post('/employees/edit/:id', 	saveAfterEdit);

router.get('/employees/delete/:id', deleteEmployee);

module.exports = router;
