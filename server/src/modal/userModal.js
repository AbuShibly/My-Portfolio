const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    userMessage: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModal = mongoose.model("User", userSchema);

module.exports = UserModal;
