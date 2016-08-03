var request = require('request');
var myPostRequest = request.post('http://localhost:8099');

process.stdin
	.pipe( myPostRequest )
	.pipe( process.stdout );