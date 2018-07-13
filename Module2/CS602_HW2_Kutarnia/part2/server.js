const express = require('express');
const app = express();

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
// GET request for add employee
app.get('/addEmployee', (req, res) => {
	res.render('newEmployee');
});

app.get('/about', (req, res) => {
	res.render('about_quote',
		{
			quote: quotes.getRandomQuote(),
			quotes: quotes.getAllQuotes()
		});
});
app.get('/viewEmployees', (req, res) => {
	res.render('employeeList', {
		records: employeeModule.getAllEmployees()
	});
	/*
		{quote: quotes.getRandomQuote(), 
		 quotes: quotes.getAllQuotes()});
		 */
});

//POST Requests
app.post('/api/addEmployee', (req, res) => {
	console.log("POST");
	employeeModule.addEmployee(req.body.firstName, req.body.lastName);
	res.redirect('/viewEmployees');
	//res.json(courses.getAllCourses());
});

app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
});


