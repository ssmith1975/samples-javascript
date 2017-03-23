var express = require('express'),
    bodyParser = require('body-parser');

// Create an express application
var app = express()
// Register a middleware
    .use(bodyParser())
    .use(function(req, res) {
        if (req.body.foo) {
            res.end('Body parsed! Value of foo: ' + req.body.foo);
        } else {
            res.end('Body does not have foo!');
        }
    })
    .use(function(err, req, res, next) {
        res.end('Invalid body!');
    })
    .listen(3000);// Register with http


//http.createServer(app).listen(3000);
    

/*var http = require('http');
var fs = require('fs');
var path = require('path');

var port = process.env.port || 3000;

var server = http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./public/index.html').pipe(res);
    } else {
        send404(res);
    }
    
    
}).listen(port);

console.log('server running on port ', port);

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}
 */