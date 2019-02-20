// nodemon server_3
// simple HTTP Server which reads data from a JSON file and returns in the response

var http = require('http');
var fs = require('fs');

const data = './data/data.json';

const host = '127.0.0.1';
const port = 3000;

var server = http.createServer((req, res) => {
    // If you get a CORS error, add the following line:
    res.setHeader('Access-Control-Allow-Origin', '*');

    // set Content-Type for JSON
    res.setHeader('Content-Type', 'application/json');
    res.end(fs.readFileSync(data));
});
  
server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});
