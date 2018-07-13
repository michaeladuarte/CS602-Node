var express = require('express');
var app = express();

// GET request to the homepage
app.get('/', function(req, res) {
	res.type('text/plain');
  res.send('Welcome to CS602!');
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

