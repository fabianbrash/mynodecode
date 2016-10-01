
//Load module for http server
var http = require('http');

var server = http.createServer(function (request, response) {

	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("<h1>Hello World!!</h1>");
});

//Listen on port 8000
server.listen(8000);

//Output to console
console.log("Server running @ http://localhost:8000");

