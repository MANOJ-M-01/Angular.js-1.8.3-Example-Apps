const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4001;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 500, description: "A powerful laptop" },
  { id: 2, name: "Phone", price: 300, description: "A smart phone" },
  { id: 3, name: "Watch", price: 100, description: "A smartwatch" },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "pass") {
    res.json({ success: true, token: "dummy-token" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
