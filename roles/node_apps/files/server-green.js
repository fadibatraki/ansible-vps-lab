const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from GREEN Application");
});

app.listen(4001, "127.0.0.1", () => {
  console.log("GREEN Application running on port 4001");
});