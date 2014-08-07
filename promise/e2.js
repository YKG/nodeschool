var q = require('q');
var defer = q.defer();
var promise = defer.promise;

promise.then(null, console.log);
setTimeout(defer.reject, 300, "REJECTED!");

