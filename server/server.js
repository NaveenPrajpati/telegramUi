// server.js
import { config } from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
config();
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
