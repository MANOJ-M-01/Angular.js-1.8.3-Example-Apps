angular.module("ecommerceApp").config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); // Clean URLs
    $routeProvider
      .when("/login", {
        templateUrl: "app/views/login.html",
        controller: "LoginController",
      })
      .when("/home", {
        templateUrl: "app/views/home.html",
        controller: "HomeController",
      })
      .when("/product/:id", {
        templateUrl: "app/views/product.html",
        controller: "ProductController",
      })
      .when("/cart", {
        templateUrl: "app/views/cart.html",
        controller: "CartController",
      })
      .otherwise({
        redirectTo: "/login",
      });
  });
