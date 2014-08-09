var qhttp = require('q-io/http');

var url = 'http://localhost:7000';
var id;
var url2 = 'http://localhost:7001/';
qhttp.read(url)
.then(function(id){
	return qhttp.read(url2 + id)
})
.then(JSON.parse)
.then(console.log)
.then(null, console.error)
.done();
