const express = require("express");
const router = express.Router();
const { createUser, verifyEmail } = require("../controllers/userCtrl");
const { userValidate, validated } = require("../util/validation");

router.post("/create-user", userValidate, validated, createUser);
router.post("/verify-email", verifyEmail);

module.exports = router;
