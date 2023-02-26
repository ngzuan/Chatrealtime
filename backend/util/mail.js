exports.generateOTP = (otpLength = 6) => {
  let OTP = "";
  for (let i = 1; i <= otpLength; i++) {
    const randomValue = Math.round(Math.random() * 9);
    OTP += randomValue;
  }
  return OTP;
};
