angular.module("ecommerceApp").factory("ProductService", function () {
  const products = [
    { id: 1, name: "Laptop", price: 500, description: "A powerful laptop" },
    { id: 2, name: "Phone", price: 300, description: "A smart phone" },
    { id: 3, name: "Watch", price: 100, description: "A smartwatch" },
  ];
  return {
    getAll() {
      return products;
    },
    getById(id) {
      return products.find((p) => p.id === parseInt(id));
    },
  };
});
