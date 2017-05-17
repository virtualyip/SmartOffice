
var io = require('socket.io-client');
var notification = io.connect('http://54.254.191.134:3000');
// 當連接到 socket.io server 時觸發 set-token 設定使用者的 room

notification.on('connect', function() {
  //notification.emit('set-token', '12345');
  //notification.emit('notification', 'notification');
  console.log('connected');
});

notification.on('notification', function(message) {
  console.log(message);
});

var SensorTag = require('sensortag');
SensorTag.discover(function(sensorTag){
	console.log(sensorTag);
});

/*
//wemo
var Wemo = require('wemo-client');
var wemo = new Wemo();

wemo.discover(function(deviceInfo) {
  console.log('Wemo Device Found: %j', deviceInfo);

  // Get the client for the found device
  var client = wemo.client(deviceInfo);

  // Handle BinaryState events
  client.on('binaryState', function(value) {
    console.log('Binary State changed to: %s', value);
  });

  // Turn the switch on
  client.setBinaryState(0);
});
*/