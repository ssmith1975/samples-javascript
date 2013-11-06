var http = require('http');

http.createServer(function (request, response) {
    console.log('url log: ' + request.url);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<html><body>Home URL was : ' + request.url + '</body></html>');

}).listen(3000, 'localhost');

console.log('Server running at http://localhost: 3000/');
