var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err){
		console.log(err.stacktrace);
		return;
	}
	console.log(data.split('\n').length - 1);
});

