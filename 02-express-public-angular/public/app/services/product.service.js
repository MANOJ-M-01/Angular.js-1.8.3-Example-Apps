angular.module("ecommerceApp").factory("ProductService", function ($http, AuthService) {
    const service = {};

    service.getAll = function () {
      return $http.get("/api/products", {
        headers: {
          Authorization: "Bearer " + AuthService.getToken(),
        },
      });
    };

    service.getById = function (id) {
      return $http.get("/api/products/" + id, {
        headers: {
          Authorization: "Bearer " + AuthService.getToken(),
        },
      });
    };

    return service;
  });
