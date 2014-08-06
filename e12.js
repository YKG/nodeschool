var http = require('http');

var server = http.createServer(function(request, response){
	request.setEncoding("utf8");
	var  body = "";
	request.on("data", function(trunk){
		body += trunk;
	});
	request.on("end", function(){
		response.write(body.toUpperCase());
		response.end();
	});
});

server.listen(+process.argv[2]);

