angular.module("ecommerceApp").factory("AuthService", function ($http, $window) {
    const service = {};

    service.login = function (username, password) {
      return $http
        .post("/api/login", { username, password })
        .then(function (response) {
          if (response.data.token) {
            $window.localStorage.setItem("jwtToken", response.data.token);
            return { success: true };
          }
        })
        .catch(function (err) {
          return { success: false, message: err.data.message };
        });
    };

    service.logout = function () {
      $window.localStorage.removeItem("jwtToken");
    };

    service.isLoggedIn = function () {
      return !!$window.localStorage.getItem("jwtToken");
    };

    service.getToken = function () {
      return $window.localStorage.getItem("jwtToken");
    };

    return service;
  });
