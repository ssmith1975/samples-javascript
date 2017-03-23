var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastname: 'Smith' };
var findKey = { name: 'John' };

MongoClient.connect('mongodb://localhost:27017/demo', function (err, db) {
    if (err) throw err;
    
    console.log('Successfully connected');
    
    var collection = db.collection('people');
    
    collection.insert(demoPerson, function (err, docs) {

        demoPerson.lastname = 'Martin';
        collection.save(demoPerson, function(err) {
            collection.find(findKey).toArray(function (err, results) {
                console.log('Found results:', results);
            
                collection.remove(findKey,
                    function (err, results) {
                    console.log('Deleted person');
                    db.close();
                }); // end remove

            }); // end find
        }); // end save

    });// end insert
}); // end connect