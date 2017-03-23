function Airport2Ctrl($scope, $routeParams){
	// Set Airport2
	$scope.currentAirport = $scope.airports[$routeParams.airport2];
}