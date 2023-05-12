/**
 * The http module enables creating HTTP servers and making HTTP requests. 
 * It allows you to handle incoming HTTP requests, send HTTP responses,
 *  make HTTP requests to external servers, and manage HTTP-related functionality.
 */


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, world!');
});

server.listen(3000);
