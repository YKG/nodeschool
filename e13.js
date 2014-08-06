var http = require('http');
var url = require('url');

//console.log(new Date());
http.createServer(function(req, res){
	var json = url.parse(req.url, true);
	
	if(json.pathname === '/api/parsetime'){
		var arr = json.query.iso.split('T')[1].split('.')[0].split(":");
		var data = {};
		data.hour = +arr[0] + 8; // without +8, won't pass. TZ?
		data.minute = +arr[1];
		data.second = +arr[2];
//		console.log(json.query);
//		console.log(json.pathname);
//		console.log(arr);

		res.writeHead(200, {'Content-Type': 'application/json'});
//		res.write(JSON.stringify(json));
		res.end(JSON.stringify(data));
	}else if(json.pathname === '/api/unixtime'){
		res.writeHead(200, {'Content-Type': 'application/json'});
		var data = {};
		data.unixtime = +Date.parse(json.query.iso);
		res.end(JSON.stringify(data));
	}
}).listen(+process.argv[2]);
