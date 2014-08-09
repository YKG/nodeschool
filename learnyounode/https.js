// curl -k https://localhost:8000/
var https = require('https');
var fs = require('fs');
var map = require('through2-map');

var options = {
  key: fs.readFileSync('./ssl/rootCA.key'),
  cert: fs.readFileSync('./ssl/rootCA.pem')
};

https.createServer(options, function (request, response) {
	//console.log(request);
	console.log("xx: url:" + request.url);
	console.log("xx: url:" , request.headers);
	if(request.method != 'POST')
		return response.end("send me a POST\n");

	request.pipe(map(function(chunk){
		var s = chunk.toString();
		console.log("========: " + s);
		return chunk.toString().toUpperCase();
	})).pipe(response);
}).listen(8000);


