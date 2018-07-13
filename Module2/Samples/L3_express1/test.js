var express = require('express');
var app = express();

// to parse request body
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Request query data
app.get('/data', function(req, res) {
	var queryData  = JSON.stringify(req.query);
	res.send("Query Data " +  queryData);
});

// Request params data and query data
app.get('/data/:id1/:id2', function(req, res) {
	var paramsData = JSON.stringify(req.params);
	var queryData  = JSON.stringify(req.query);
	res.send("Params Data " + paramsData + "<br/>" +
					 " Query Data " +  queryData);
});

app.get('/', function(req, res){
	var html = 
	 '<form method="POST" action="/data">' + 
	   'FirstName: <input name="firstName" value=""><br/>' + 
	   'LastName: <input name="lastName" value=""><br/>' +
	   '<input type="Submit"></form>'
	res.send(html);
});

// request body data
app.post('/data', function(req, res) {
	var bodyData  = JSON.stringify(req.body);
	res.send("Body Data " +  bodyData);
})


app.use(function(req, res) {
	res.type('text/html');
	res.status(404);
	res.send("<b>404 - Not Found</b>");
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});










