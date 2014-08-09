var qio = require("q-io/http");

var url = 'http://localhost:1337';
// console.log("arch");
qio.read(url).then(JSON.parse).then(console.log);
