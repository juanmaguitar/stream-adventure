var concat = require('concat-stream');
var reverseProcess = concat( reverseText );

function reverseText ( bufferFull ) {
	var content = bufferFull.toString();
	var reversedText = content.split('').reverse().join('');
	console.log(reversedText);
}

process.stdin
	.pipe( reverseProcess )