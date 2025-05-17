angular.module("ecommerceApp").factory("CartService", function () {
  const cart = [];

  return {
    addToCart: function (product) {
      const existing = cart.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
    },
    getCart: function () {
      return cart;
    },
    removeFromCart: function (productId) {
      const index = cart.findIndex((p) => p.id === productId);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    },
    clearCart: function () {
      cart.length = 0;
    },
    getTotal: function () {
      return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  };
});
