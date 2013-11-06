function Airport2Ctrl($scope, $routeParams, Airport){
	// Set Airport2
	//$scope.currentAirport = $scope.airports[$routeParams.airport2];
	$scope.currentAirport =  Airport.get({airportCode : $routeParams.airport2});
}