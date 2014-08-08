var q = require('q');

function throwMyGod(){
	throw new Error("OH NOES");
}

function iterate(i){
	console.log(i);
	return i + 1;
}

// q.fcall(function(){
// 	var c = 1;
// 	for(var i = 0; i < 10; i++){
// 		c = iterate(c);
// 	}
// });
q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log)
;