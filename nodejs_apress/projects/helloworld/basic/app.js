// Understanding Prototypes

// prototype1
(function () {
    console.log("\nprototype1:\n");
    var foo = {};
    foo.__proto__.bar = 123;
    console.log(foo.bar);

})();

// prototype2
(function () {
    console.log("\nprototype2:\n");
    // Lets create a test function and set a member on its prototype
    function foo (){ };
    foo.prototype.bar = 123;

    // Lets create an object using "new"
    // foo.prototype will be copied to bas.__proto__
    var bas = new foo();

    // Verify the prototype has been copied
    console.log(bas.__proto__ === foo.prototype); // true
    console.log(bas.bar);

})();

// prototype3
(function () {
    console.log("\nprototype3:\n");
    // Lets create a test function and set a member on its prototype
    function foo(){ };
    foo.prototype.bar = 123;

    // Lets create two instances
    var bas = new foo();
    var qux = new foo();

    // Show original value
    console.log(bas.bar); // 123
    console.log(qux.bar); // 123

    // Modify prorotype
    foo.prototype.bar = 456;

    console.log(bas.bar); // 456
    console.log(qux.bar); // 456

})();


// prototype4
(function () {
    console.log("\nprototype4:\n");

    // Lets create a test function
    function foo(){ };
    foo.prototype.bar = 123;

    // Lets create two instances 
    var bas = new foo();
    var qux = new foo();

    // Overwrite the prototype value for bas
    bas.bar = 456;
    console.log(bas.bar); // 456 ie. prototype not accessed

    // Other objects remain unaffected
    console.log(qux.bar); // 123

})();
/*

// prototype5
(function () {
 console.log("\nprototype5:\n");


})();

*/