var http = require('http');

//http.get("http://www.google.com/", function(response){
http.get(process.argv[2], function(response){
	response.setEncoding("utf8");
	response.on("data", console.log);
	response.on("error", console.error);
});
