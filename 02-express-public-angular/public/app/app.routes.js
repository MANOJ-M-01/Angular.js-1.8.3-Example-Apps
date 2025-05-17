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
        requiresAuth: true,
      })
      .when("/product/:id", {
        templateUrl: "app/views/product.html",
        controller: "ProductController",
        requiresAuth: true,
      })
      .when("/cart", {
        templateUrl: "app/views/cart.html",
        controller: "CartController",
        requiresAuth: true,
      })
      .otherwise({
        redirectTo: "/login",
      });
  })
  .run(function ($rootScope, $location, AuthService) {
    // Initially hide nav (on login page)
    $rootScope.showNav = false;
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      if (next && next.$$route) {
        // Show nav if the route requires auth and user logged in
        if (next.$$route.requiresAuth && AuthService.isLoggedIn()) {
          $rootScope.showNav = true;
        } else {
          // Hide nav on login or public pages
          $rootScope.showNav = false;
        }

        if (next.$$route.requiresAuth && !AuthService.isLoggedIn()) {
          event.preventDefault();
          $location.path("/login");
        }
      }
    });
  });
