const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("<h1>Hello World - Bhavesh Kumar 123</h1>");
});

io.on("connection", (socket) => {
  console.log("A user conencted");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
