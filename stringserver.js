// nohup node stringserver &
// http://68.183.107.205:8080/E-57a_Spring_2019/stringserver.js
// ps aux | grep node
// EX: root      1592  0.3  2.8 922536 29228 ?        Sl   14:17   0:00 node stringserver
// kill 1592 
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write("Hello, Node!");
    res.end();
});
server.listen(8080);
console.log("Listening on http://127.0.0.1:8080/");