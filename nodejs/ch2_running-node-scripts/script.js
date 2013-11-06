var os = require('os');
var message = 'This  ol script is running on Node.js ' + process.version +
    ' on a ' + os.type() + '-based operaing system.';
console.log(message);

// Keep console from closing
process.stdin.resume();