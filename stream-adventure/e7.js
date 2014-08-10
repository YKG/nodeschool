var http = require('http');
var through = require('through');

http.createServer(function(req, res){
	console.log('M: ' , req.method, req.url);
	if(req.method === 'POST'){
//	if(req.method === 'POST'){
//		req.pipe(through(write, end)).pipe(res);
//		res.end();
		req.pipe(through(write, end)).pipe(res);
//		req.pipe(through(write, end)).pipe(process.stdout);
//		res.end('OK..');
	}
	else
		return res.end('not post');
	//req.pipe(through(write, end)).pipe(res);
}).listen(+process.argv[2]);

function write(buf){
	this.queue(buf.toString().toUpperCase());
}

function end(){
	this.queue(null);
}
