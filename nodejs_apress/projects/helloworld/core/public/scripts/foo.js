// foo.js

//define([], function () {
//    var foo = function (){
//        console.log('foo was called');
//    }
//    return foo; // function to export
//});

module.exports = function (){
    console.log('foo was called');
}