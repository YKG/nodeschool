var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function(err, list){
	if(err){
		console.log(err.stacktrace);
		return;
	}
	list.forEach(function(file){
		var fileext = path.extname(file);
		if(fileext === "." + ext){
			console.log(file);
		}
	});
});
