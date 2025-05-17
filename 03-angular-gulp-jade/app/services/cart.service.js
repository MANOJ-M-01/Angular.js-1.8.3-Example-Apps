angular.module("ecommerceApp").factory("CartService", function () {
  const CART_KEY = "user_cart";

  function loadCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  let cart = loadCart();

  return {
    getItems() {
      return cart;
    },
    addItem(item) {
      cart.push(item);
      saveCart(cart);
    },
    removeItem(id) {
      cart = cart.filter((i) => i.id !== id);
      saveCart(cart);
    },
    clear() {
      cart = [];
      saveCart(cart);
    },
  };
});
