const newConnectionHandler = require("./socketHandlers/newConnect");
const disconnectHandler = require("./socketHandlers/disConnect");

const registerSever = (socket) => {
  const io = require("socket.io")(socket, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-type"],
    },
  });

  serverStore.setSocketServerInstance(io);
  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    newConnectionHandler(socket, io);
    socket.on("new-message", (newMessage) => {
      socket.broadcast.emit("new-message", newMessage);
    });
    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

module.exports = registerSever;
