const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello, World! This is my first express Server.");
});
app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
