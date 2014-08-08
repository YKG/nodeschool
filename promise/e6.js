var q = require('q'),
	defer = q.defer();

function parsePromised(json){
	//defer.promise.then(JSON.parse, null, json).then(null, console.log);
	// defer.promise.then(console.log, null, json).then(null, console.log);
	promise = defer.promise;

	// promise.then(function(){
	// 	JSON.parse(json);
	// }).then(defer.resolve, defer.reject);
	// promise.then(function(){
		try{
			JSON.parse(json);
			// defer.resolve('done');
			defer.resolve();
		}catch(e){
			defer.reject(e);
		}
	// });
	return promise;
}

parsePromised(process.argv[2]).then(null, console.log);
// parsePromised('{"z0a": 1}').then(console.log, console.log);
