function AirportCtrl($scope, $routeParams, Airport){
	// Set Airport
	//$scope.currentAirport = $scope.airports[$routeParams.airportCode];
	$scope.currentAirport = Airport.get({airportCode : $routeParams.airportCode});
	 
}