const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

/* MongoDb Integration */
const mongoose = require("./src/config/db");

app.get("/", (req, res) => {
  res.send("This Is Portfolio Server!");
});

/* Controller */
const userData = require("./src/controller/userController");
app.use("/post", userData);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
