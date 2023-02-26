const registerSever = (socket) => {
  const io = require("socket.io")(socket, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-type"],
    },
  });
  io.on("connection", (socket) => {
    socket.on("new-message", (newMessage) => {
      socket.broadcast.emit("new-message", newMessage);
    });
  });
};

module.exports = registerSever;
