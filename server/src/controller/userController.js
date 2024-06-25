const express = require("express");
const router = express.Router();
const UserModal = require("../modal/userModal");

router.post("/", async (req, res) => {
  const Data = new UserModal({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userMessage: req.body.userMessage,
  });
  await Data.save();
  res.status(200).json({ Message: "Message Sent Successfull" });
});

module.exports = router;
