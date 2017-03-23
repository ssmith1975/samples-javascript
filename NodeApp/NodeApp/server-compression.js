var express = require('express');
var compression = require('compression');

var app = express()
    .use(compression({threshold:512}))
    .use(express.static(__dirname + '/public'))
    .listen(3000);