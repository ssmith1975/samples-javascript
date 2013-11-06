
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
  //mongoskin = require('mongoskin');

var app = module.exports = express();
/*
// Connect to database
var databaseUrl = "airportdb"; 
var collections = ["airports"];
var db = require("mongojs").connect(databaseUrl, collections);

*/
/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};
/*
// Mongoskin DB
var db = mongoskin.db('localhost:27017/airportdb', {safe:true});
app.param('collectionName', function(req, res, next, collectionName){
	
	req.collection = db.collection(collectionName);
	console.log("CollectionName is set...");
	return next();
});

*/


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
//app.get('/api/name', api.name);


app.get('/api/airports', api.airports); // end get '/api/airports'

app.get('/api/airports/:airportCode', api.airport);
	
//app.get('/api/airports/:airport1/:airport2', api.twoAirports);

// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);





/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
