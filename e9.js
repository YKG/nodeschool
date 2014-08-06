var http = require('http');
var bl = require('bl');

var argv = process.argv.slice(2);
//console.log(argv);

function foo(urls){
	var url = urls.shift();
	if(!url) return;
	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			console.log(data.toString());
			foo(urls)
		}));
	});
};

foo(argv);
