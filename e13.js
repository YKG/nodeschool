var http = require('http');
var url = require('url');

function parsetime(time){
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}
function unixtime(time){
	return {
		unixtime: time.getTime()// .now()	
	};
}
http.createServer(function(req, res){
	var parsedURL = url.parse(req.url, true);
	//var date = new Date(Date.parse(parsedURL.query.iso));
	var date = new Date(parsedURL.query.iso);
	var result;

	if(parsedURL.pathname === '/api/parsetime')
		result = parsetime(date);
	else if(parsedURL.pathname === '/api/unixtime')
		result = unixtime(date);

	if(result){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	}else{
		res.writeHead(404);
		res.end();
	}
}).listen(+process.argv[2]);
