// save.js

var db = require('./db');
var saveThis = {name : 'Coffee', category : 'beverages'};

db.save(saveThis, function(err, res){
	console.log(res);
});

setTimeout(function(){console.log("wait..");}, 15000);