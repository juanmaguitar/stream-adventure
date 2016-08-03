var WebSocketServer = require('ws').Server;
var websocketStream = require('websocket-stream');

var wss = new WebSocketServer({port: 8090});
var fs = require('fs');
var util = require('util');

wss.on('connection', function connect(ws) {
  var stream = websocketStream(ws);
  stream.pipe(process.stdout);
});