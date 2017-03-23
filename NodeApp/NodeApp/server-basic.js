var express = require('express'),
    http = require('http');

// Create an express application
var app = express()
    // Register a middleware
    .use(function(req, res) {       
        res.end('hello express!'); 
    });

// Register with http
http.createServer(app).listen(3000);