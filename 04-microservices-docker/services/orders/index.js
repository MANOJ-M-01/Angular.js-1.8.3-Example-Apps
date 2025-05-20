const express = require("express");
const app = express();
const port = 3003;

app.get("/api/orders", (req, res) => {
  res.json([{ id: 1, product: "Widget", user: "Alice" }]);
});

app.listen(port, () => {
  console.log(`Order service listening at http://localhost:${port}`);
});
