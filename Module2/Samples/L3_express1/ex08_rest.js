var express = require('express');
var app = express();

// to parse request body
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static resources
app.use(express.static(__dirname + '/public'));

// setup handlebars view engine
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// module
var courses = require('./ex08_courses');

app.get('/api/courses', function(req, res){
	res.json(courses.getAllCourses())
});

app.get('/api/course/:cid', function(req, res){
	res.json(courses.getCourse(req.params.cid))
});

app.delete('/api/course/:cid', function(req, res){
	courses.removeCourse(req.params.cid);
	res.json(courses.getAllCourses());
});

app.post('/api/course', function(req, res) {
	courses.addCourse(req.body.cid, req.body.cname);
	res.json(courses.getAllCourses());
});

app.get('/new', function (req, res){
	res.render('newCourse');
});

app.use(function(req, res) {
	res.type('text/html');
	res.status(404);
	res.send("<b>404 - Not Found</b>");
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});

/*
curl -X GET "http://localhost:3000/api/courses"

curl -X GET "http://localhost:3000/api/course/cs602"

curl -X DELETE "http://localhost:3000/api/course/cs602"

curl -X POST -H "Content-type: application/json" \
    "http://localhost:3000/api/course" \
    -d '{"cid":"cs520", "cname":"Info Structures"}'

*/
