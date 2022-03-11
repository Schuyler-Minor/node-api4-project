const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.end("<h1>hello world!</h1>");
});

server.listen(9000, () => {
  console.log("server is running on 9000!");
});
