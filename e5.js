var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function(err, list){
	if(err){
		console.log(err.stacktrace);
		return;
	}
	var arr = [];
	for(var i = 0; i < list.length; i++){
		var fileext = path.extname(list[i]);
		if(fileext === "." + ext){
			arr.push(list[i]);
			console.log(list[i]);
		}
	}

//	console.log(arr);
});
