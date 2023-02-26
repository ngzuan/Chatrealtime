const express = require("express");
const { sendMassage } = require("../controllers/messageCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/send-message", authMiddleware, sendMassage);

module.exports = router;
