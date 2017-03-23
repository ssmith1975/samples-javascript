var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser('my super secret sign key'))
    .use('/toggle',
        function (req, res) {
            var output='';
            if (req.cookies.foo) {
                //res.send(req.cookies.foo);
                output += req.cookies.foo + '\n';
            } else {
                res.cookie('foo', 'bar', {maxAge: 10000, httpOnly: true});
                //res.send('foo cookie set!');
                output += 'foo cookie set!\n';
            }

            if (req.signedCookies.name) {
        res.clearCookie('name');
                output += 'name cookie cleared! Was: ' + req.signedCookies.name + '\n';
                //res.end('name cookie cleared! Was: ' + req.signedCookies.name);
            } else {
                res.cookie('name', 'foo', { signed: true, httpOnly: true, /*secure: true */});
                output += 'name cookie set!\n';
            }
            res.end(output);
        }).listen(3000);