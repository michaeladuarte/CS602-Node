var net = require('net');
const readline = require('readline');
//create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readMessage = (client) => {
    rl.question("Enter Command: ", (line) => {
        client.write(line);
        if (line == "bye") {
            client.end();
        }
        else {
            setTimeout(() => {
                readMessage(client);
            }, 2000);
        };
        
    });
};

//connect to server:
const client = net.connect({ port: 3000 },
    () => {
        console.log("Connected to Server....");
        readMessage(client);
    });

//when data is returned to the client
client.on('data', function (data) {
    console.log("...Received: ");
    console.log('' + data.toString().trim());
});
client.on('end', () => {
    console.log("Client disconnected...");
});



