var express = require('express');
var app = express();

// setup handlebars view engine
var handlebars = require('express-handlebars');

app.engine('handlebars', 
	handlebars({defaultLayout: 'main_logo'}));

app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

// Use the quotes module
var quotes = require('./ex04_quotes.js');

// GET request to the homepage
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about_quote', 
		{quote: quotes.getRandomQuote(), 
		 quotes: quotes.getAllQuotes()});
});

app.use(function(req, res) {
	res.status(404);
	res.render('404');
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});











