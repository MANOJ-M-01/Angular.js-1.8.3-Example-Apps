angular.module("ecommerceApp").controller( "ProductController", function ($scope, $routeParams, ProductService, CartService) {
      $scope.product = {};

      ProductService.getById($routeParams.id).then(function (response) {
        $scope.product = response.data;
      });

      $scope.addToCart = function () {
        CartService.addToCart($scope.product);
        alert("Product added to cart!");
      };
    }
  );
