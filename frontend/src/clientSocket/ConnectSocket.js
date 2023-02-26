import { io } from "socket.io-client";

const socket = io("http://localhost:7000");

socket.on("hello", (data) => {
  console.log(data);
});

socket.emit("send", "send oke!");
