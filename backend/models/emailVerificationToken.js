const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
// Declare the Schema of the Mongo model
var emailVerificationTokenSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    expires: 3600,
    default: Date.now(),
  },
});

emailVerificationTokenSchema.pre("save", async function (next) {
  if (!this.isModified("email")) {
    const salt = bcrypt.genSaltSync(10);
    this.token = await bcrypt.hash(this.token, salt);
  }

  next();
});

emailVerificationTokenSchema.methods.compareToken = async function (token) {
  const result = await bcrypt.compare(token, this.token);
  return result;
};
//Export the model
module.exports = mongoose.model(
  "EmailVerificationToken",
  emailVerificationTokenSchema,
);
