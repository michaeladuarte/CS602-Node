var http = require('http');
var fs   = require('fs');

var server = http.createServer(
	function (request, response) {
    // process the request
    console.log("Request URL:", request.url);
    if ((request.method == 'GET') &&
    		((request.url == '/') || 
    			(request.url == '/index.html'))) {
    	var fileName = './public/home.html';
    	var rs = fs.createReadStream(fileName);
    	// send the response
    	rs.pipe(response);
    } else {
    	response.write('Invalid access ' + request.url);
    	response.end();
    }    
	});

server.listen(3000);
console.log('Server running at http://localhost:3000/');

