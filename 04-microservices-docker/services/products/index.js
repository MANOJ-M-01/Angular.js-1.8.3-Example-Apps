const express = require("express");
const app = express();
const port = 3002;

app.get("/api/products", (req, res) => {
  res.json([{ id: 1, name: "Widget" }]);
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
