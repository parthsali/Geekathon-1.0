const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsers } = require("./users");

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: true, origins: "*:*" });

app.use(cors());

io.on("connect", (socket) => {
  console.log("New Connection found");

  socket.on("join", ({ name }, callback) => {
    const { error, user } = addUser({ id: socket.id, name });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `Welcome, ${user.name}!`,
    });

    socket.broadcast.emit("message", {
      user: "admin",
      text: `${user.name} has joined!`,
    });

    io.emit("users", getUsers());

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });

      io.emit("users", getUsers());
    }
  });
});

server.listen(4000, () =>
  console.log(`Server has started.`)
);
