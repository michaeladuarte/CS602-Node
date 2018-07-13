var net = require('net');

var server = net.createServer(
	function(socket){
		console.log("Client connection...");

		socket.on('end', function(){
			console.log("Client disconnected...");
		});

		// process data from client
		socket.on('data', function(data){
			console.log(" Received:", data.toString());
		});

		// send data to client
		socket.write("Hello from server");
	});

// listen for client connections
server.listen(3000, function() {
	console.log("Listening for connections");
});
