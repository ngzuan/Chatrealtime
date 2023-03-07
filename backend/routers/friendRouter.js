const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  postAccept,
  postInvite,
  postReject,
} = require("../controllers/friendCtrl");

router.post("/invite", auth, postInvite);

router.post("/accept", auth, postAccept);

router.post("/reject", auth, postReject);

module.exports = router;
