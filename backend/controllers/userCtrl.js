const asyncHandel = require("express-async-handler");
const User = require("../models/userModel");
const EmailVerificationToken = require("../models/emailVerificationToken");
const { isValidObjectId } = require("mongoose");
const { generateOTP } = require("../util/mail");
const generateToken = require("../config/jwt");
const nodemailer = require("nodemailer");
const cloudinaryUPloading = require("../util/cloudinary");
const fs = require("fs");
const createUser = asyncHandel(async (req, res) => {
  const { email } = req.body;
  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const createUser = await User.create(req.body);
      let OTP = generateOTP();
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

const resendVerifyEmail = asyncHandel(async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (!user) throw new Error("user not found");
  if (user.isVerify) throw new Error("This id email already verify");
  const alreadyHasToken = await EmailVerificationToken.findOne({
    owner: userId,
  });
  if (alreadyHasToken) throw new Error("Only after one hour you can request ");
  let OTP = generateOTP();
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
});

const loginUser = asyncHandel(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    console.log(user);

    if (!user) throw new Error("user not found");
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("password mismatch");
    const token = generateToken(user._id);
    res.cookie("refreshToken", token, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      user: {
        id: user?._id,
        name: user?.name,
        email: email,
        token: token,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});
const uploadImg = asyncHandel(async (req, res) => {
  const { _id } = req.user;
  try {
    const uploader = (path) => cloudinaryUPloading(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const findUser = await User.findByIdAndUpdate(
      _id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      { new: true },
    ).select("-password");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createUser,
  verifyEmail,
  resendVerifyEmail,
  loginUser,
  uploadImg,
};
