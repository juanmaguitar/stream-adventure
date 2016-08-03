var http = require('http');

http.createServer(function(request, response) {
	if (request.method === 'POST') {

		request.on('data', function (data) {
			response.write("request:" + data);
		});

		request.on('end', function (data) {
			response.end();
		});

	}
	else response.end("gimme POST!")
}).listen(8099)

// echo "hack the planet" | curl -d @- http://localhost:8099