angular.module("app", []).controller("MainCtrl", function ($scope) {
  $scope.vm = this;
  this.message = "Hello from AngularJS in Nx Monorepo!";
});
