var express = require('express');
var app = express();

app.route('/')
    .all(function(req,res,next) {
        res.write('all\n');
        next();
    })
    .get(function(req,res,next) {
        res.end('get\n');
    })
    .put(function(req,res,next) {
        res.end('put\n');
    })
    .post(function(req,res,next) {
        res.end('post\n');
    })
    .delete(function(req,res,next) {
        res.end('delete\n');
});

app.listen(3000);