angular.module("ecommerceApp").controller("CartController", function ($scope, CartService) {
    $scope.cart = CartService.getCart();

    $scope.getTotal = function () {
      return CartService.getTotal();
    };

    $scope.removeFromCart = function (productId) {
      CartService.removeFromCart(productId);
    };

    $scope.clearCart = function () {
      CartService.clearCart();
    };
  });
