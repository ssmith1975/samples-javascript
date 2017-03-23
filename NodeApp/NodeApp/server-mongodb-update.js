﻿var MongoClient = require('mongodb').MongoClient;

var website = {
    url: 'http://www.google.com',
    visits: 0
};
var findKey = { url: 'http://www.google.com'};

MongoClient.connect('mongodb://localhost:27017/demo', function (err, db) {
    if (err) throw err;
    
    console.log('Successfully connected');
    
    var collection = db.collection('websites');
    
    collection.insert(website, function (err, docs) {

        var done = 0;
        
        function onDone(err) {
            done++;
            if (done < 4) return;

            collection.find(findKey).toArray(function (err, results) {
                console.log('Visits: ', results[0].visits);

                // cleanup
                collection.drop(function() { db.close() });
            }); // end find            


        } // end onDone

        var incrementVisits = { '$inc': { 'visits': 1 } };
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);




    });// end insert
}); // end connect