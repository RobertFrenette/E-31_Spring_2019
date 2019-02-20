// nodemon server
// simple HTTP Server which returns "Hello, Node!"" in the response

// require Node modules
const http = require('http');
const host = '127.0.0.1';
const port = 3000;

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type':'text/plain'});
  res.write('Hello, Node!');
  res.end( );
});

server.listen(port, host, () => {
  console.log(`Node server listening at http://${host}:${port}.`);
  console.log('To load the App, enter the following in your Browser:');
  console.log(`http://${host}:${port}`);
});
