var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();
stream.pipe(through(function(buf){
	this.queue(buf.toString().toUpperCase());	
}), function(){
	this.queue(null);
}).pipe(stream);

tr.pipe(process.stdout);
