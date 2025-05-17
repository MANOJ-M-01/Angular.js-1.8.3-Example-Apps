angular.module("ecommerceApp").controller("NavController", function ($scope, $location, AuthService) {
    $scope.isLoggedIn = AuthService.isLoggedIn;

    $scope.logout = function () {
      AuthService.logout();
      $location.path("/login");
    };
  });
