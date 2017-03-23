var express = require('express');
var expressSession = require('express-session');

var MongoStore = require('connect-mongo')(expressSession);
var sessionStore = new MongoStore({
    //host: '127.0.0.1',
    //port: 27017,
    url: 'mongodb://localhost:27017/session',
   // db: 'session',
});

var app = express()
    .use(expressSession({
        secret: 'my super duper secret sign key',
        store: sessionStore
    }))
    .use('/home',
        function (req, res) {
            console.log('sessions:');
            console.log(req.session);
            if (req.session.views) {
                req.session.views++;
            } else {
                req.session.views = 1;
            }
            res.end('Total views for you: ' + req.session.views);
        })
    .use('/reset',
        function(req,res) {
            delete req.session.views;
            res.end('Cleared all your views');
        })
    .listen(3000);