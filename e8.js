var http = require('http');

http.get(process.argv[2], function(response){
	var buf = "";
	response.setEncoding("utf8");
	response.on("data", function(data){
		buf += data;
//		console.log(buf.toString());
	});
	response.on("error", console.error);
	response.on("end", function(err, data){
		console.log(buf.length);
		console.log(buf.toString());
	});

});
