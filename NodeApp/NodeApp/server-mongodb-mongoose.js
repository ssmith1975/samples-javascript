var mongoose = require('mongoose');

// Define a schema
var tankSchema = new mongoose.Schema({ name: 'string', size: 'string' });
tankSchema.methods.print = function() {
    console.log('I am ',this.name,' the ',this.size);
    //console.log('name: ',this.name);
};

// Compile it into a model
Tank = mongoose.model('Tank',tankSchema);


mongoose.connect('mongodb://localhost:27017/demo');

var db = mongoose.connection;
db.on('error', function (err) { throw err; });
db.once('open', function callback() {
    console.log('connected!');
    
    // Use the model
    var tony = new Tank({ name: 'tony', size: 'small' });
    tony.print(); // I am tony the small

    tony.save(function(err) {
        Tank.findOne({ name: 'tony' })
            .exec(function(err,tank) {
                tank.print();

                db.collection('tanks')
                    .drop(function() { db.close(); });

            }); // end exe
    }); // end save

    db.close();
});