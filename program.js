// Here's the reference solution:

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8090');

var button = document.getElementById("send");
button.addEventListener("click", sendMessageToServer);

function sendMessageToServer(e) {
	e.preventDefault()
	var messageInput = document.getElementById("msg");
	stream.write(messageInput.value + '\n');
	messageInput.value = "";
}
