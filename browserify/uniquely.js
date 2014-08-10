var uniq = require('uniq');

function foo(str){
	return uniq(str.split(','));
}

module.exports = foo;

