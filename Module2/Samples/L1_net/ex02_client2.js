var net = require('net');
var readline = require('readline');

var clientId = "Client " + 
			Math.floor(1000*Math.random());

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var readMessage = function(client) {
	rl.question("Enter Message: ", function (line){
			client.write("From " + clientId + ": " + line);
			if (line == "bye")
				client.end();
			else {
				setTimeout(function() {
					readMessage(client);
				}, 5000);
			};
	});
};

var client = net.connect({port:3000},
	function(){
		console.log("Connected to server");
		readMessage(client);
	});

client.on('end', function(){
	console.log("Client disconnected...");
	return;
});

client.on('data', function(data){
	console.log("\n Received:", data.toString());	
});





















	