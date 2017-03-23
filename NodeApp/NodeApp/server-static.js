var express = require('express');

// Create an express application
var app = express()
    // Register a middleware
    .use(express.static(__dirname + '/public'))
    // Register with http
    .listen(3000);