const express = require("express");
const router = express.Router();
const {
  createUser,
  verifyEmail,
  resendVerifyEmail,
  loginUser,
  uploadImg,
} = require("../controllers/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { userImgResize, uploadPhoto } = require("../middlewares/uploadIgm");
const { userValidate, validated } = require("../util/validation");

router.post("/create-user", userValidate, validated, createUser);
router.post("/verify-email", verifyEmail);
router.post("/resend-verify-email", resendVerifyEmail);
router.post("/login", loginUser);
router.put(
  "/UploadImgUser",
  uploadPhoto.array("images", 10),
  userImgResize,
  authMiddleware,
  uploadImg,
);

module.exports = router;
