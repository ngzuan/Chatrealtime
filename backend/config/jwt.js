const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "xxxxxxxxxxx", { expiresIn: "1d" });
};

module.exports = generateToken;
