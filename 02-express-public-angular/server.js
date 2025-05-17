const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

const products = [
  { id: 1, name: "Laptop", price: 500, description: "A powerful laptop" },
  { id: 2, name: "Phone", price: 300, description: "A smart phone" },
  { id: 3, name: "Watch", price: 100, description: "A smartwatch" },
];

// API routes
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

// Catch-all for Angular HTML5 mode routing
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// app.get("/:req", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
