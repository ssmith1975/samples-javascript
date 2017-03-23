function DestinationsCtrl($scope, Airport) {

	$scope.airports = Airport.query();

	// Navigation
	$scope.setActive('destinations');

	// Partials
	$scope.sidebarURL="partials/airport.html";
	$scope.formURL="partials/form.html";

	// Sidebar
	$scope.currentAirport = null;
	$scope.setAirport = function(code){
			$scope.editing = null;
			$scope.currentAirport = $scope.airports[code];
	};

	// Editing Form
	$scope.editAirport = function(code){
			$scope.currentAirport = $scope.airports[code];
			$scope.editing = $scope.airports[code];
	};	
}