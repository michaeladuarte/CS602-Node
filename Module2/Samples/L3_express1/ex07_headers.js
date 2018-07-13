var express = require('express');
var app = express();

// GET request to the homepage
app.get('/', function(req, res) {
	res.set('Refresh', 5);
	res.send(new Date().toString());
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

