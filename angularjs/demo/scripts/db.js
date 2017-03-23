// db.js

var cradle = require('cradle');
var connection = new(cradle.Connection)('http://127.0.0.1', 5984, {
  auth: { username: 'admin', password: 'password' }
});

var db = connection.database('restaurant');


module.exports = db;
