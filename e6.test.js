var f = require("./e6.js");

f(process.argv[2], process.argv[3], function(err, data){
	if(err){
		console.log(err.message);
		return;
	}
	data.forEach(function(filename){
		console.log(filename);
	});
});

