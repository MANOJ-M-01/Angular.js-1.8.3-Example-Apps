angular.module("ecommerceApp").controller("HomeController", function ($scope, ProductService) {
    $scope.products = [];

    ProductService.getAll()
      .then(function (response) {
        $scope.products = response.data;
      })
      .catch(function (error) {
        console.error("Failed to fetch products:", error);
      });
  });
