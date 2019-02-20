// nodemon server_2
// simple HTTP Server which serves an index.html page

// require Node modules
const http = require('http');
const url  = require('url');
const fs   = require('fs');

const host = '127.0.0.1';
const port = 3000;
const index = 'index.html';

var server = http.createServer((req, res) => {
  res.end(fs.readFileSync(index)); 
});

server.listen(port, host, () => {
	console.log(`Node server listening at http://${host}:${port}.`);
	console.log('To load the App, enter the following in your Browser:');
	console.log(`http://${host}:${port}`);
});
