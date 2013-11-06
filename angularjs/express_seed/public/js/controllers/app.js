


function AppCtrl($scope){

	// Navigation
	$scope.setActive = function(type) {
		$scope.destinationsActive = '';
		$scope.flightsActive = '';
		$scope.reservationsActive = '';

		$scope[type + 'Active'] = 'active';		
	};

	// Airport template	
	$scope.airportTemplate = 'partials/airport.html';
/*
	// Airport list data
	$scope.airports = {
		"PDX": {
			"code" : "PDX",
			"name" : "Portland International Airport",
			"city" : "Portland",
			"destinations" : [
				"LAX",
				"SFO"
			]
		},
		"LAX" : {
			"code" : "LAX",
			"name" : "Los Angeles International",
			"city" : "Los Angeles",
			"destinations" : [
				"PDX",
				"STL"
			]
		},
		"SFO" : {
			"code" : "SFO",
			"name" : "San Francisco International",
			"city" : "San Francisco",
			"destinations" : [
				"PDX",
				"LAX"
			]
		},

		"STL" : {
			"code" : "STL",
			"name" : "Lambert St Louis International",
			"city" : "St Louis ",
			"destinations" : [
				"PDX",
				"LAX"
			]
		},		
	}	
*/	



	
} // end AppCtrl

