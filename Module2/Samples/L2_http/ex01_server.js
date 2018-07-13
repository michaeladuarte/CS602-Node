var http = require('http');

var server = http.createServer(
	function (request, response) {
    // process the request
    console.log("Request URL:", request.url,
    	"- Request Method:", request.method);

    // send the response
    response.write('Hello! It is ' +  new Date());
    response.end();

	});

server.listen(3000);
console.log('Server running at http://localhost:3000/');

