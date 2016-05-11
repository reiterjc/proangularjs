angular.module("sportsStore")

    .controller("productListCtrl", function($scope) {

        var selectedCategory = null;

        $scope.selectCategory = function(newCategory) {
            selectedCategory = newCategory;
        };

        $scope.isSelected = function(category) {
            return category == selectedCategory;
        };

        $scope.showProduct = function(product) {
            return selectedCategory == null || product.category == selectedCategory;
        };

    });