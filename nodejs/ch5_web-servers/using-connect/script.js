var connect = require('connect');


var app = connect()
    .use(connect.static('public'))
    .use(function (req, res) {
        // error handling
        res.end('Could not find it...');s
    }).listen(3000);

