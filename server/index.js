const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsers } = require("./users");
const { encryptMessage } = require("./encryptDecryptService");

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: true, origins: "*:*" });

app.use(cors());

io.on("connect", (socket) => {
  console.log("New Connection found");

  socket.on("join", ({ name }, callback) => {

    const { error, user } = addUser({ id: socket.id, name });

    if (error) return callback(error);

    let text = `${user.name} has joined!`;
    text = encryptMessage(text);

    socket.emit("message", {
      user: "admin",
      text: text,
    });

    text = `${user.name} has joined!`;
    text = encryptMessage(text);
    socket.broadcast.emit("message", {
      user: "admin",
      text: text,
    });

    io.emit("users", getUsers());

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log("message", message);

    message = encryptMessage(message);

    io.emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      let text = `${user.name} has left.`;
      text = encryptMessage(text);
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
