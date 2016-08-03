var through = require('through2');
var split = require('split');
var upperCaseOddProcess = through(writeUpperCaseOdd);
var lineCount = 0;

function writeUpperCaseOdd ( bufferLine , encoding, next) {
	var strLine = bufferLine.toString();
	this.push(lineCount % 2 === 0
			? strLine.toLowerCase() + '\n'
			: strLine.toUpperCase() + '\n'
	);
	lineCount ++;
	next();
}

process.stdin
	.pipe( split() )
	.pipe( upperCaseOddProcess )
	.pipe( process.stdout );