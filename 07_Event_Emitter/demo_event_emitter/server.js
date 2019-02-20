// node server
var http = require('http');
var url = require('url');

var userEmitter = require('./user_emitter');
var userDetector = require('./user_detector');

const host = '127.0.0.1';
const port = 3000;

// http://127.0.0.1:3000
// http://127.0.0.1:3000/username
// http://127.0.0.1:3000/username?name=FooBar
var server = http.createServer((req, res) => {
    // get path
    const { pathname } = url.parse(req.url);
    // get QueryString
    const query = url.parse(req.url,true).query;

    userEmitter.checkUserName(pathname, query);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello, Node!');
});

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});
