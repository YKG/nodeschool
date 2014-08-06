var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, list){	
		if(err){
			return callback(err);
		}
		var arr = [];
		list.forEach(function(filename){
			if(path.extname(filename) === "." + ext)
				arr.push(filename);
		});
		callback(null, arr);
	});
};
