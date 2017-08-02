var Trumpet = require('trumpet'); //Trumpet's a Constructor function
var through2 = require('through2')

var trumpetMainStream = new Trumpet();
var loudSecondaryStream = trumpetMainStream.select('.loud').createStream();

loudSecondaryStream
  .pipe(through2( function(chunk, _, next) {
    var modifiedElement =  chunk.toString().toUpperCase()
    this.push(modifiedElement)
    next()
  }))
  .pipe(loudSecondaryStream)

process.stdin
  .pipe(trumpetMainStream)
  .pipe(process.stdout);


// var Trumpet = require('trumpet'); //Trumpet's a Constructor function

// var trumpet = new Trumpet();
// var loudHTMLDStream = trumpet.createStream('.loud');

// loudHTMLDStream.on('data', function(data) {
//   loudHTMLDStream.write( data.toString().toUpperCase() );
// });

// loudHTMLDStream.on('end', function(data) {
//   loudHTMLDStream.end();
// });

// process.stdin
//   .pipe(trumpet)
//   .pipe(process.stdout);