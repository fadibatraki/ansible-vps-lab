const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Fadi from Node App 1");
});

app.listen(3001, "127.0.0.1", () => {
  console.log("Node App 1 running");
});
