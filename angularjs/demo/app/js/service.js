angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function($resource){
		return $resource('/collections/airports');


		//return $resource('/airports');
	});