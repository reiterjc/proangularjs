angular.module('sportsStore')

    .controller("sportsStoreCtrl", function ($scope, $http) {
        $scope.data = {};
        $http.get("http://localhost:5500/api/products")
            .success(function(data) {
                $scope.data.products = data;
            })
            .error(function(error) {
                $scope.data.error = error;
            });
    });