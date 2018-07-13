const express = require('express');
const app = express();
var js2xmlparser = require("js2xmlparser");

// to parse request body
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup handlebars view engine
const handlebars = require('express-handlebars');

//setup handlebars as the view engine
app.engine('handlebars',
	handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
handlebars({ defaultLayout: 'main' });

// static resources
app.use(express.static(__dirname + '/public'));

// Use employee module
const employeeModule = require('./EmployeeModule.js');

// GET request to the homepage
app.get('/', (req, res) => {
	res.render('home');
});
// GET request for add employee view
app.get('/addEmployee', (req, res) => {
	res.render('newEmployee');
});
//view all employees link
app.get('/viewEmployees', (req, res) => {
	res.render('employeeList', {
		records: employeeModule.getAllEmployees()
	});
});
//get employee by ID
app.get('/viewEmployee/:id', (req, res) => {
	res.format({
		'application/json': () => {
			res.json(cemployeeModule.lookupByID(req.params.id));
		},

		'application/xml': () => {
			let record = js2xmlparser.parse("employee", employeeModule.lookupByID(req.params.id));
			
			res.type('application/xml');
			res.send(record);
		},

		'text/html': () => {
			res.render('employee', {
				record: employeeModule.lookupByID(req.params.id)		
			});
		}
	});
});
//get employee by ID satisfys the CURL HW step
app.get('/id/:id', (req, res) => {
	res.format({
		'application/json': () => {
			res.json(employeeModule.lookupByID(req.params.id));
		},

		'application/xml': () => {
			let record = js2xmlparser.parse("employee", employeeModule.lookupByID(req.params.id));
			
			res.type('application/xml');
			res.send(record);
		},

		'text/html': () => {
			res.render('employee', {
				record: employeeModule.lookupByID(req.params.id)		
			});
		}
	});
});

//get by last name
app.get('/lastName/:lastName', (req, res) => {
	res.format({

		'application/json': () => {
			res.json(employeeModule.lookupByLastName(req.params.lastName));
		},

		'application/xml': () => {
			let record = js2xmlparser.parse("employee", employeeModule.lookupByLastName(req.params.lastName));
			
			res.type('application/xml');
			res.send(record);
		},

		'text/html': () => {
			res.render('employeeList', {
				records: employeeModule.lookupByLastName(req.params.lastName)
			});
		}
	});

	
});

//POST Requests
app.post('/api/addEmployee', (req, res) => {
	console.log("POST");
	employeeModule.addEmployee(req.body.firstName, req.body.lastName);
	res.redirect('/lastName/'+'Smith');
});

app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
});


