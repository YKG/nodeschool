var url = require('url');
var querystring = require('querystring');
//var s = 'http://substack.net/filez/dogez/img.cgi?file=../hi/doge.gif';
var addr = url.parse(prompt());
//var addr = url.parse(s);
var file = querystring.parse(addr.query).file;
console.log(url.resolve(addr, file));
