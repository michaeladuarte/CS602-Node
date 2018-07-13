var express = require('express');
var app = express();

// GET request to the homepage
app.get('/', function(req, res) {
	res.type('text/plain');
  res.send('Welcome to CS602!');
});

app.get('/about', function(req, res) {
	res.type('text/html');
  res.send('<b>Course description of CS602...</b>');
});

app.use(function(req, res) {
	res.type('text/html');
	res.status(404);
	res.send("<b>404 - Not Found</b>");
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

