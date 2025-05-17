angular.module('ecommerceApp').controller('ProductController', function($scope, $routeParams, ProductService) {
  $scope.product = ProductService.getById($routeParams.id);
});