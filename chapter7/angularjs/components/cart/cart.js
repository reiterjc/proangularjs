angular.module("cart", [])

    .factory("cart", function() {
        var cartData = [];

        var addProduct = new function (id, name, price) {
            var addedToExistingItem = false;

            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData[i].count++;
                    addedToExistingItem = true;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({count: 1, id: id, price: price, name: name});
            }
        };

        var removeProduct = new function (id) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        };

        var getProducts = new function () {
            return cartData;
        };


        return {
            addProduct: addProduct,
            removeProduct: removeProduct,
            getProducts: getProducts
        }

    })

    .directive("cartSummary", function(cart) {
        return {
            restrict: "E",
            templateUrl: "components/cart/cartSummary.html",
            controller: function ($scope) {
                var cartData = cart.getProducts;

                $scope.getTotal = function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].price * cartData[i].count;
                    }
                    return total;
                };

                $scope.getItemCount = function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }
                    return total;
                };
            }
        }
    });