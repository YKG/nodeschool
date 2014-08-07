var q = require('q');
var defer = q.defer();
var promise = defer.promise;

function printErr(err){
	console.log(err.message);
}
promise.then(null, printErr);
setTimeout(defer.reject, 300, new Error("REJECTED!"));

