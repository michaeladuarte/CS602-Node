var http = require('http');

var url = 
 	"http://people.bu.edu/kalathur" + 
 	"/current_courses.html";

var req = http.get(url, function (response){
	var buffer = '';

	response.on('data', function(chunk){
		buffer += chunk;
	});

	response.on('end', function(){
		console.log(buffer);
	});
});

req.on('error', function (err){
	console.log(err);
})
