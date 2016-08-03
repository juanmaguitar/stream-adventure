var through = require('through2');
var upperCaseProcess = through(write, end);

function write (buffer, encoding, next) {
	var strData = buffer.toString();
	this.push( strData.toUpperCase() );
	next();
}

function end (done) {
	done();
}

process.stdin
	.pipe( upperCaseProcess )
	.pipe(process.stdout);