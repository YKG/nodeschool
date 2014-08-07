var q = require('q');
var defer = q.defer();
var promise = defer.promise;

promise.then(console.log);
setTimeout(defer.resolve("RESOLVED!"), 300);

