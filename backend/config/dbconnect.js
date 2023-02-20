const { default: mongoose } = require("mongoose");

// Connect MongoDB at default port 27017.
mongoose.set("strictQuery", false);
const dbconnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tuan2002:tuan2002@cluster0.rjmzrdk.mongodb.net/?retryWrites=true&w=majority",
    );
    console.log("db connect success");
  } catch {
    console.log("db connect fail");
  }
};

module.exports = dbconnect;
