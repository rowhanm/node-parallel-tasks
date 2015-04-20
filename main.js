var winston=require('winston');
var config=require('./config/config.js');
var ExecutionEngine=require('./lib/executionengine.js');
var SocketCommunicator=require('./lib/socketcomm.js');
var PortScanner=require('./lib/portscanner.js');

var currentPortScanner=new PortScanner({lan:config.lan,port:config.port});
currentPortScanner.scanPorts(function(err,connectedMachines){
	console.log('Connected Machines are-');
	console.log(connectedMachines)
	console.log(SocketCommunicator);
	var executionEngine=ExecutionEngine.getExecutionEngine();
	var currentSocketComm=SocketCommunicator.getSocketCommunicator();
	currentSocketComm.connectTo(connectedMachines,function(){
		console.log('connected is done');
	});
});

