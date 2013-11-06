try{
    var argv = require('optimist').argv
    $ = require('jquery'),
    fs = require('fs');

    for (var i = 0; i < argv.times; i++) {
        console.log(argv._[0] + ' on loop number ' + (i + 1));
    }
} catch (ex) {
    console.log(ex.message);
} finally {
    // Keep console from closing
    process.stdin.resume();

}