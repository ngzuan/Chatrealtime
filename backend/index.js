const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const cookie = require("cookie-parser");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { errHandler, notFound } = require("./middlewares/errHandler");
const dbconnect = require("./config/dbconnect");
const authRouter = require("./routers/authRouter");

const socketSever = require("./socketsever");

dotenv.config();
dbconnect();
const PORT = process.env.PORT || 5000;

const sever = http.createServer(app);
socketSever.registerSocketSever(sever);
app.use(cookie());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));

app.use("/api/user", authRouter);

sever.listen(PORT, () => {
  console.log(`server on Port ${PORT}`);
});

app.use(notFound);
app.use(errHandler);
