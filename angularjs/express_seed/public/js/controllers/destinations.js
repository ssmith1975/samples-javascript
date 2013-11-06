function DestinationsCtrl($scope, Airport) {
/*
	var queryAirport = Airport.query();
	for(var item in queryAirport){
		if(item){
			//$scope.airport[item._id] = item;
			
		}
		console.log(item);
	}*/
	$scope.airports = Airport.query();
	console.log( "Airport query: ", $scope.airports.length);
	

	// Navigation
	$scope.setActive('destinations');

	// Partials
	$scope.sidebarURL="partials/airport.html";
	$scope.formURL="partials/form.html";

	// Sidebar
	$scope.currentAirport = null;
	$scope.setAirport = function(code){
			$scope.editing = null;
			$scope.currentAirport = Airport.get({airportCode : code});

			//console.log( $scope.currentAirport) ;
			/*
			for(var i=0; i< $scope.airports.length; i++){
				if($scope.airports[i].code === code){
					$scope.currentAirport = $scope.airports[i];
				}
					//console.log( JSON.stringify($scope.currentAirport) )


			}*/

			//$scope.currentAirport = $scope.airports[code];
			//$scope.currentAirport = Airport.get('/api/airports/:airportCode', {airportCode: code});
			//console.log("Code: ", JSON.stringify($scope.currentAirport));
	};

	// Editing Form
	$scope.editAirport = function(code){
			$scope.currentAirport = $scope.setAirport(code);
			$scope.editing =  Airport.get({airportCode : code});
			console.log( $scope.currentAirport) ;
	};	
}