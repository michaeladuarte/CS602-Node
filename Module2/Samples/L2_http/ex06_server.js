var http = require('http');
var fs   = require('fs');
var qs   = require('querystring');

var server = http.createServer(
	function (request, response) {
    // process the request
    console.log("Request URL:", request.url);
    if (request.method == 'POST')  {
      var data = '';
      
      request.on('data', function(chunk){
        data += chunk;
      });
      
      request.on('end', function(){
        var postData = qs.parse(data);
        //send the response
        response.writeHead(200, 
          { 'content-type': 'application/json' });
        response.write(JSON.stringify(postData));
      });    	
    } else {
      // send the form
    	var fileName = './public/form.html';
      var rs = fs.createReadStream(fileName);
      rs.pipe(response);
    }    
	});

server.listen(3000);
console.log('Server running at http://localhost:3000/');

