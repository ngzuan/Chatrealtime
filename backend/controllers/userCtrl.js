const asyncHandel = require("express-async-handler");
const User = require("../models/userModel");
const EmailVerificationToken = require("../models/emailVerificationToken");
const nodemailer = require("nodemailer");
const { isValidObjectId } = require("mongoose");

const createUser = asyncHandel(async (req, res) => {
  const { email } = req.body;
  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const createUser = await User.create(req.body);
      let OTP = "";
      for (let i = 0; i <= 5; i++) {
        const randomValue = Math.round(Math.random() * 9);
        OTP += randomValue;
      }
      const newEmailVerifyToken = new EmailVerificationToken({
        owner: createUser._id,
        token: OTP,
      });
      await newEmailVerifyToken.save();
      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9770ba952d9323",
          pass: "d08078418d2687",
        },
      });
      transport.sendMail({
        from: "nvtuan181120@gmail.com",
        to: createUser.email,
        subject: "Email verification",
        html: `<p>Your verification OTP</p>
        <h1>${OTP}</h1> 
        `,
      });

      res.json({
        msg: "Please verify your email.OTP has been sent to your email accounts",
      });
    } else {
      throw new Error("Email already exist ,Please enter new Email ");
    }
  } catch (error) {
    throw new Error(error);
  }
});

const verifyEmail = asyncHandel(async (req, res) => {
  const { userId, OTP } = req.body;
  if (!isValidObjectId(userId)) throw new Error("Invalid user");
  const user = await User.findById(userId);
  if (!user) throw new Error("not found user!");

  if (user.isVerified) throw new Error("user is already verified");

  const token = await EmailVerificationToken.findOne({ owner: userId });
  console.log(token);
  if (!token) throw new Error("token not found");
  const isMatched = await token.compareToken(OTP);
  if (!isMatched) throw new Error("Please submit a valid OTP!");
  user.isVerified = true;

  await user.save();
  await EmailVerificationToken.findByIdAndDelete(token._id);
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9770ba952d9323",
      pass: "d08078418d2687",
    },
  });
  transport.sendMail({
    from: "nvtuan181120@gmail.com",
    to: user.email,
    subject: "Welcome Email",
    html: "<h1>chao mung ban den voi app cua chung toi va cam on da chon no! <3</h1>",
  });

  res.json("Your email verified");
});

module.exports = {
  createUser,
  verifyEmail,
};
