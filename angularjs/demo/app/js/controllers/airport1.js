function Airport1Ctrl($scope, $routeParams){
	// Set Airport1
	$scope.currentAirport = $scope.airports[$routeParams.airport1];
}