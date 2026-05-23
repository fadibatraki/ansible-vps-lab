const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Node App 2");
});

app.listen(3002, "127.0.0.1", () => {
  console.log("Node App 2 running");
});
