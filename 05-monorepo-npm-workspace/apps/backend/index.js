const express = require("express");
const { getGreeting } = require("../../libs/shared");
const app = express();
const port = 3000;

app.get("/api/greet", (req, res) => {
  res.json({ message: getGreeting() });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
