const mongoose = require("mongoose");
const Url = process.env.URL;

mongoose.connect(Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "My-Portfolio",
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
