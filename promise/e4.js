var q = require('q');
var defer = q.defer();
var promise = defer.promise;

defer.resolve('SECOND');
promise.then(console.log);
console.log('FIRST');
console.log('third?');

