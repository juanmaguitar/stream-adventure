var http = require('http');

//https://www.npmjs.com/package/through2
var through = require('through2');
var upperCaseProcess = through( writeUpperCase )
var server = http.createServer();

function writeUpperCase( bufferChunk, _ , next ) {
	strChunk = bufferChunk.toString();
	this.push( strChunk.toUpperCase() );
	next();
}

server.on('request', function(request, response) {
	if (request.method === 'POST') {
		request
			.pipe( upperCaseProcess )
			.pipe( response )
	}
	else response.end('send me a POST\n');
})

server.listen(parseInt(process.argv[2]));