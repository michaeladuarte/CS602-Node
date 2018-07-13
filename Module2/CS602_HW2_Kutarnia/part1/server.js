var net = require('net');
var EmployeeModule = require('./employeeModule');
let result = '';
//create server 
var server = net.createServer(
    function (socket) {
        console.log('Client connection...');

        socket.on('end', function () {
            console.log('Client disconnected');
        });
        socket.on('data', function (data) {
            //tokenize data received
            var strArray = data.toString().split(" ");
            //the method name is the first index in the array
            var method = strArray[0];
            console.log('.....Received: ' + data.toString());
            if (method == 'lookupByLastName') {
                //call employeeModule method
                result = JSON.stringify(EmployeeModule.lookupByLastName(strArray[1]));
                //write result to stream
                socket.write(result);
            } else if (method == 'addEmployee') {
                result = JSON.stringify(EmployeeModule.addEmployee(strArray[1], strArray[2]));
                //write result to stream
                socket.write(result);
            } else if (method == 'lookupById') {
                result = JSON.stringify(EmployeeModule.lookupByID(strArray[1]));
                //write result to stream
                socket.write(result);
            }else if (method == 'bye') {
                result = "Invalid Request"
                //write result to stream
                socket.write(result);
            } else {
                console.log("COMMAND NOT RECOGNIZED");
                socket.write('Invalid Request');
            }
        })
    });

server.listen(3000, function () {
    console.log("Listening for connections");
});