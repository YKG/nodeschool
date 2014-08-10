var _ = require('lodash');
exports.parse = function(str){
	return	_.map(str.split('\n'), JSON.parse);
}

exports.stringify = function(rows){
	return	_.map(rows, JSON.stringify).join('\n');
}
