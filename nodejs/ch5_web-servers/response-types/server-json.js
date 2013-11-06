

    var connect = require('connect');

    var myData = {
        "fruite" : "apple",
        "number" : "555-1212",
        "color" : "purple"
    };

    var app = connect()
        .use(function (req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(myData));
        })
        .listen(3000);


