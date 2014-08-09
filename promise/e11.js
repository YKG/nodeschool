var qhttp = require('q-io/http');

var url = 'http://localhost:7000';
var id;
var url2 = 'http://localhost:7001/';
qhttp.read(url)
// .then(function(json){
// 	console.log(json.toString());
// 	console.log(JSON.parse(json));
// })
.then(function(buf){
	// console.log(buf.toString());
	id = buf.toString();
})
.then(function(){
	// console.log(url2 + id);
	qhttp.read(url2 + id)
	.then(JSON.parse)
	.then(console.log)
	.done();
});
