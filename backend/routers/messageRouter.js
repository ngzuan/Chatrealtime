const express = require("express");
const { sendMassage, getAllMessages } = require("../controllers/messageCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/send-message", authMiddleware, sendMassage);
router.get("/all-message", getAllMessages);
module.exports = router;
