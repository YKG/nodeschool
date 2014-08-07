var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	var stream = fs.createReadStream(process.argv[3]);
	stream.pipe(response);
});
server.listen(+process.argv[2]);
