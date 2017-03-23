window.name = "NG_DEFER_BOOTSTRAP!";

define(["angular.min"], function (angular) {
    'use strict';
        console.log(angular);
       // console.log($);


    require(['../app/controllers/test'], function (test){


        angular.element(document).ready(function () {
            angular.module('myapp', [])
            .controller('test', test);
            angular.bootstrap(document, ['myapp']);
        });


        // Add controller to angular module
        //var myapp = angular.module('myapp', []);
        
        //return myapp;
    }); // end require



}); // end require

