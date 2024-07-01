const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Vintage Tech MarketPlace (Server)");
});

app.listen("5000", () => {
  console.log("Port Running on Server 5000");
});
