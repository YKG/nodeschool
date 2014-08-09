var q = require('q');

function all(p1, p2){
	var defer = q.defer();
	var cnt = 0;
	var arr = [];
	function fulfill(msg){
		cnt++;
		// console.log("fulfill: ", cnt);
		arr.push(msg);
		if (cnt == 2) {
			// console.log(arr)
			return defer.resolve(arr);
		};
	}

	p1.then(fulfill).then(null, defer.reject);
	p2.then(fulfill).then(null, defer.reject);
	return defer.promise;
}

var p1 = q.defer();
var p2 = q.defer();


// function newfunc(p1, p2){
// 	p1.then(console.log);
// 	p2.then(console.log);
// }
// newfunc(p1.promise, p2.promise);

function resolveTwoPromise(p1, p2){
	// console.log('1');
	p1.resolve('PROMISES');
	// console.log('2');
	p2.resolve('FTW');
}

setTimeout(resolveTwoPromise, 200, p1, p2);
all(p1.promise, p2.promise).then(console.log);
