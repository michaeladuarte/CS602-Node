var express = require('express');
var app = express();

// GET request to the homepage
app.get('/', function(req, res) {
	res.type('text/html');
	var result = '<table border=1>';
	var item = '';
	for (var header in req.headers) {
		item = '<tr><td>' + header + '</td>' +
		        '<td>' + req.headers[header] + '</td></tr>\n';
		result += item;
	}
	result += '</table>'
  res.send(result);
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

