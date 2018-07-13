var http = require('http');
var fs   = require('fs');
var path = require('path');

var mimeLookup = {
  '.js'  : 'application/javascript',
  '.pdf' : 'application/pdf',
  '.jpg' : 'application/jpeg',
  '.gif' : 'application/gif',
  '.txt' : 'text/plain',
  '.html': 'text/html',
  '.ico' : 'image/x-icon'
};

function sendError(text, response) {
  response.writeHead(404, 
      { 'Content-Type': 'text/plain' });
  response.write('Error 404: ' + text);
  response.end();
}

var server = http.createServer(
  function (request, response) {
    // process the request
    console.log("Request URL:", request.url);
    if (request.method == 'GET') {
      var fileName;
      if (request.url == '/') {
        fileName = '/index.html';
      } else {
        fileName = request.url;
        fileName = fileName.replace(/\.\./g, "_");
      }
      var filepath = path.resolve('./public' + fileName);
      console.log(filepath);
      // determine mime type
      var fileExt = path.extname(filepath);
      var mimeType = mimeLookup[fileExt];
      if (!mimeType) {
        sendError('Unknown MIME type', response);
        return;
      }
      // check if file exists
      fs.exists(filepath, function (exists) {
        // if not
        if (!exists) {
          sendError('Resource not found', response);
          return;
        };
        // send the file
        response.writeHead(200, { 'content-type': mimeType });
        fs.createReadStream(filepath).pipe(response);
      });
    }
	});

server.listen(3000);
console.log('Server running at http://localhost:3000/');

