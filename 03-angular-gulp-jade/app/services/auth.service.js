angular.module("ecommerceApp").factory("AuthService", function ($location) {
  let isLoggedIn = false;
  return {
    login(username, password) {
      if (username === "user" && password === "pass") {
        isLoggedIn = true;
        $location.path("/home");
      } else {
        alert("Invalid credentials");
      }
    },
    isAuthenticated() {
      return isLoggedIn;
    },
    logout() {
      isLoggedIn = false;
      $location.path("/login");
    },
  };
});
