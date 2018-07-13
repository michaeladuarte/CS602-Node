var http = require('http');

var server = http.createServer();

server.on('request',
	function (request, response) {
    // process the request
    console.log("Request URL:", request.url);

    // send the response
    response.write('Hello! It is ' +  new Date());
    response.end();

	});

server.listen(3000);
console.log('Server running at http://localhost:3000/');

