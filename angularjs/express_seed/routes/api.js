/*
 * Serve JSON to our AngularJS client
 */

var mongoskin = require('mongoskin'),
express = require('express'),
app = express();

// Connect to database
var databaseUrl = "airportdb"; 
var collections = ["airports"];
var db = require("mongojs").connect(databaseUrl, collections);

var airportsCollection = db.collection('airports');

// Mongoskin DB
var db = mongoskin.db('localhost:27017/airportdb', {safe:true});
app.param('collectionName', function(req, res, next, collectionName){
	
	req.collection = db.collection(collectionName);
	console.log("CollectionName is set...");
	return next();
});
 /**/
exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};


exports.airports = function (req, res) {
	var list = {};
	 db.collection('airports').find({}).toArray(function(err, result) {
		try{	 	
		  	if(result){

		  		for(var i=0; i< result.length; i++){
			  		console.log(result[i].code);
			  		list[result[i].code] = result[i];		  			
		  		}



		  			console.log(list);
					res.json(list);

		  	}
		} catch(err){
			console.log(err.message)
		}
	});


	


/*		
	var obj = {};
	airportsCollection.findEach({}, function(err ,result) {
			var objId = result.code;
			//obj[objId] = result;

		console.log(objId);
	  	console.log("---------------");	
	  	
	}); 
	
	
	db.collection('airports').find({}).toArray(function(err, result) {
	  	res.json(result); 
	});

*/
};
exports.airport = function (req, res) {
	//console.log("TEST TEST TEST");
	airportsCollection.findOne({_id: req.params.airportCode} , function(err, results){
		if(err) throw err;
		//console.log("param id: ", typeof(req.params.id));
		//console.log("Airport code: ", req.params.airportCode);
		res.json(results);

	});/**/
	//res.send("Hello world");
};