const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://zau6xled.a2hosted.com", // Specify the origin of your client
    methods: ["GET", "POST"], // Specify the methods allowed
    // credentials: true, // Set to true if you're using credentials
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World - Bhavesh Kumar 123</h1>");
});

io.on("connection", (socket) => {
  console.log("A user conencted");
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
