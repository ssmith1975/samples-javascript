// get_delivery.js

var db = require('./db');

db.get('6c35f9291b72c9479480ffbc5200075c', function(err, doc){
	console.log(doc);
});

setTimeout(function(){console.log("wait..");}, 15000);