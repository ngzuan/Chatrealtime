const { check, validationResult } = require("express-validator");
exports.userValidate = [
  check("name").not().trim().isEmpty().withMessage("name is missing"),
  check("email").normalizeEmail().isEmail().withMessage("Email is validated!"),
  check("password")
    .not()
    .trim()
    .isEmpty()
    .withMessage("name is missing")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 character to 20 long!"),
];
exports.validated = (req, res, next) => {
  const err = validationResult(req).array();
  if (err.length) {
    res.json({
      msg: err[0].msg,
    });
  }

  next();
};
