var net = require('net');
// Keep track of client connections
var clients = [];

var server = net.createServer(
	function(socket){
		console.log("Client connection...");
		clients.push(socket);

		socket.on('end', function(){
			console.log("Client disconnected...");
			// remove socket from list of clients
			var index = clients.indexOf(socket);
			if (index != -1) {
				clients.splice(index, 1);
			}
		});

		socket.on('data', function(data){
			console.log(" Received: ", data.toString());
			// Broadcast to other clients
			for (var i = 0; i < clients.length; i++) {
				if (clients[i] != socket) {
					clients[i].write(data);
				}
			}
		});

		socket.write("Hello from server");
	});

server.listen(3000, function() {
	console.log("Listening for connections");
});


















