var http = require('http');
var through = require('through');

http.createServer(function(req, res){
//	console.log('M: ' , req.method);
	if(req.method !== 'POST'){
		return res.end('not post');
//	if(req.method === 'POST'){
//		req.pipe(through(write, end)).pipe(res);
//		res.end();
//		req.pipe(through(write, end)).pipe(res);
//		req.pipe(through(write, end)).pipe(process.stdout);
//		res.end('OK..');
	}
	req.pipe(through(write, end)).pipe(res);
}).listen(+process.argv[2]);

function write(buf){
	this.queue(buf.toString().toUpperCase());
}

function end(){
	this.queue(null);
}
