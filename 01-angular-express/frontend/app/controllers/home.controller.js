angular.module('ecommerceApp').controller('HomeController', function($scope, ProductService) {
  $scope.products = ProductService.getAll();
});
