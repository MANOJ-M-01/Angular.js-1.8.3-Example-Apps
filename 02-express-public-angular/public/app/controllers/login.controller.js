angular.module("ecommerceApp").controller("LoginController", function ($scope, $location, AuthService) {
    $scope.login = function () {
      AuthService.login($scope.username, $scope.password).then(function (
        result
      ) {
        if (result.success) {
          $location.path("/home");
        } else {
          $scope.error = result.message || "Login failed";
        }
      });
    };
  });
