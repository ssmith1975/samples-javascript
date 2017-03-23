define([], function () {

    var x =  function($scope){
        var model = {};
        model.message = 'Test: You have started your journey';
        $scope.model = model;
        console.log($scope);
    };
   
    return ['$scope',x];

});

