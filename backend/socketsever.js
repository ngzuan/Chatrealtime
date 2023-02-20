const registerSocketSever = (sever) => {
  const io = require("socket.io")(sever, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("user connect");
    console.log(socket.id);
  });
};

module.exports = {
  registerSocketSever,
};
