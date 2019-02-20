// node server
// HTTP Server which reads data from a JSON file using a Stream and returns in the response
var http = require('http');
var fs = require('fs');
const data = './data/data.json';

const host = '127.0.0.1';
const port = 3000;

// Load App: http://127.0.0.1:3000

/*
// Ex 1: Standard HTTP Server from prior Section examples
var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(fs.readFileSync(data));
});
*/

var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // Ex 2: Use Stream
    /*
    var readStream = fs.createReadStream(data);
    readStream.on('data', (mtnData) => {
        res.write(mtnData);
    });
    readStream.on('end', (mtnData) => {
        res.end(mtnData);
    });
    */

    // Ex 3: Use Stream with Pipe
    var readStream = fs.createReadStream(data);
    readStream.pipe(res);
});

server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});
