angular.module("sportsStore")

    .controller("productListCtrl", function($scope, cart) {

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

        $scope.addProductToCart = function(product) {
            cart.addProduct(product.id, product.name, product.price);
        };

    });