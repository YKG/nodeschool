var qhttp = require('q-io/http'),
	_ = require('lodash'),
	cachePath = 'http://localhost:7000',
	dbPath = 'http://localhost:7001/';

var buildDBPath = _.bind(String.prototype.concat, dbPath);

qhttp.read(cachePath)
.then(_.compose(qhttp.read, buildDBPath))
.then(_.compose(console.log, JSON.parse))
.then(null, console.error)
.done();