var split = require('split');
var through = require('through');
var i = 0;
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        //console.dir(line.toString());
		var s = line.toString().toUpperCase();
		if(i % 2 === 0)
			s =	s.toLowerCase();
        console.log(s);
		i++;
    }));
