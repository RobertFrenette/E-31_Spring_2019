// nodemon server
// This demo shows how to decode a URL

/*
 * Tests:
 * http://localhost:3000/
 * http://localhost:3000/data
 * http://localhost:3000/login.html
 * http://localhost:3000/login.html?username=FooBar
 */

// require Node modules
const http = require('http');
const url = require('url');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;
const data = './data/data.json';

var server = http.createServer((req, res) => {
  let clientURL  = req.url;
  let parsedURL  = url.parse(clientURL);
  let href       = parsedURL.href;
  let path       = parsedURL.path;
  let path_name  = parsedURL.pathname;
  let qry        = parsedURL.query;

  // skip request for favicon
  if (href !== '/favicon.ico') {
    // Decoding
    console.log('\nDecoding:');
    console.log(`clientURL: ${clientURL} \n`);

    console.log(parsedURL);

    console.log(`\nhref: ${href}`);
    console.log(`\npath: ${path}`);
    console.log(`\npath_name: ${path_name}`);
    console.log(`\nqry: ${qry}`);


    // ES6 Destructuring
    console.log('\nDestructuring:');
    let { pathname, query } = url.parse(clientURL);
    console.log(`pathname: ${pathname}`);
    console.log(`\nquery: ${query}`);
  }


  let { pathname, query } = url.parse(clientURL);
  if (pathname === '/') {

    res.writeHead(200, {'Content-type':'text/plain'});
    res.write('Hello, Node!');
    res.end( );

  } else if (pathname === '/login.html') {

    let userName = 'Node';
    // get username from QueryString
    var queryData = url.parse(req.url, true).query; // true == JSON

    if (queryData.username) {
      userName = queryData.username;
    }

    res.writeHead(200, {'Content-type':'text/plain'});
    res.write(`Hello, ${userName}!`);
    res.end( );

  } else if (pathname === '/data') {

   // If you get a CORS error, add the following line:
   res.setHeader('Access-Control-Allow-Origin', '*');

   // set Content-Type for JSON
   res.setHeader('Content-Type', 'application/json');
   res.end(fs.readFileSync(data));

  } else { 
    res.writeHead(404);
    res.end('404: Page Not Found!');
  }
});

server.listen(port, host, () => {
  console.log(`Node server listening at http://${host}:${port}.`);
});
