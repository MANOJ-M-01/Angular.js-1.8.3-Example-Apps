const express = require("express");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 4000;
const SECRET_KEY = "supersecretkey";

app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

const products = [
  { id: 1, name: "Laptop", price: 500, description: "A powerful laptop" },
  { id: 2, name: "Phone", price: 300, description: "A smart phone" },
  { id: 3, name: "Watch", price: 100, description: "A smartwatch" },
];

// POST /api/login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Replace with real user DB check
  if (username === "user" && password === "pass") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Expect "Bearer <token>"

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next();
  });
}

// Protected routes
app.get("/api/products", authenticateToken, (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", authenticateToken, (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  res.json(product);
});

// Catch-all for Angular HTML5 mode routing
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
