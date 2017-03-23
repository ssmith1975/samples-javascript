
require.config({
    baseUrl: 'Scripts',
    //paths: {
    //    "jquery": "lib/jquery-3.1.1.min",
    //    "angular": "lib/angular",
    //},
    paths: {
        // app: "../app",
        angular: ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min',
                       'lib/angular.min']
    },
    shim: {
        angular: {
            //deps: ["jquery"],
            exports: "angular",
            
        },

       /* jquery: {
           export: "$",
        },


        app: {

            deps: ["angular"],
            export: "app",
        }*/
    },
   //deps: ["app"],
});

// Start the main app logic.
requirejs(['angular'],
    function (angular) {
        require(['app/controllers/test'], function (test) {

            //var myapp = angular.element(document.getElementById('ng-myapp'));
            //myapp.attr('ng-controller', 'test');

            //angular.bootstrap(document, ['myapp']);
            angular.element(document).ready(function () {
                angular.module('myapp', [])
                .controller('test', test);
                angular.bootstrap(document, ['myapp']);
            });
        });// end require

}); // end require


/*
requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};
*/
