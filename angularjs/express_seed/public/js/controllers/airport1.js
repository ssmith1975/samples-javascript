function Airport1Ctrl($scope, $routeParams, Airport){
	// Set Airport1
	$scope.currentAirport =  Airport.get({airportCode : $routeParams.airport1});
	//$scope.currentAirport = $scope.airports[$routeParams.airport1];
}