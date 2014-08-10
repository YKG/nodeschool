var fs = require("fs");
var _ = require("lodash");
var sprintf = require("sprintf");
var src = fs.readFileSync("/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt", 'utf8');
var lines = src.split('\n');
//console.log(lines.length);

lines.pop();

var i = 0;
_.map(lines, function(s){
	if(i % 5 === 0)	
		console.log(sprintf('%3d %s', i, s));
	else
		console.log(sprintf('    %s', s));
	i++;
});
