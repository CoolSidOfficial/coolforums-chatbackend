import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // notify everyone
  io.emit("user_joined", "A new user joined the chat");

  socket.on("send_message", (messageData) => {
    io.emit("receive_message", messageData);
  });

  socket.on("disconnect", () => {
    io.emit("user_left", "A user left the chat");
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Socket server running on port 5000");
});