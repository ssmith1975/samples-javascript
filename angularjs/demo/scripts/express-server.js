// express-server.js
var application_root = __dirname;
var express = require('express');
var path = require("path");
var books = require('./routes/books');
//var airlines = require('./airlines');
var http = require('http');
var app = module.exports = express();
var mongoskin = require('mongoskin');

// Connect to database
var databaseUrl = "airportdb"; 
var collections = ["airports"]
var db = require("mongojs").connect(databaseUrl, collections);





// Config
app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
	app.set('port', process.env.PORT || 8000);

  app.use(
		"/", //the URL through which you want to access to your static content
		express.static(path.normalize(application_root + '/../app')) // where your static content is located in your filesystem
	);
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

  app.use(app.router);	
	
	//app.use(express.static(path.join(__dirname, 'public')));
	console.log(path.normalize(application_root + '/../app'));
}); // end configure

// Mongoskin DB
var db = mongoskin.db('localhost:27017/airportdb', {safe:true});
app.param('collectionName', function(req, res, next, collectionName){
	req.collection = db.collection(collectionName);
	return next();
});



// Route
app.get('/', function(req, res){
	res.send('Please select a collection, e.g., /collections/messages');
});

app.get('/collections/:collectionName', function(req, res){
	    	
	db.collection('airports').find({}).toArray(function(err, result) {
		
	  	res.send(result); 

	});

}); // end get '/collections/:collectionName'

app.get('/collections/:collectionName/:id', function(req, res){


	req.collection.findOne({_id: req.collection.id(req.params.id)}, function(err, results){
		if(err) throw err;
		//console.log("param id: ", typeof(req.params.id));

		res.send(results);

	});

	//res.send("ID requested: ", req.params.id);
	
});

app.get('/api', function (req, res) {
  res.send('Our Sample API is up...');
});

app.get('/books', books.findAll);
app.get('/books/:id', books.findById);
//app.get('/airlines', airlines.findAll);

// Port



//Start Server


http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server running at => http://localhost:" + app.get('port') + "/\nCTRL + C to shutdown");
});
