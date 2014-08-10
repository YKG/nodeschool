var util = require('./ndjson.js');

var i = 0;
function xprompt(){
	i++;
	if(i == 1)
		return '{"a": "1"}\n{"b": "2"}';
	return [{"ax": "1"}, {"bx": "2"}];	
}
console.log(util.parse(prompt()));
console.log(util.stringify(prompt()));
