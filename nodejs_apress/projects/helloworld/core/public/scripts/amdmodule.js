(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// app.js
//define(['./foo', './bar'], function (foo, bar) {
//    console.log('testing...');
//    foo();
//    bar.log();
//});

var foo = require('./foo');
var bar = require('./bar');

foo();
bar.log();
},{"./bar":2,"./foo":3}],2:[function(require,module,exports){
// bar.js

//define(['exports'], function (exports) {
//    var bar = exports.log = function () {
//        console.log('bar.log was called.');
//    };
//});

exports.log = function (){
    console.log('bar.log was called');
}
},{}],3:[function(require,module,exports){
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
},{}]},{},[1]);
