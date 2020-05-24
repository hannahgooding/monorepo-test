const express = require("express");
const cors = require("cors");
// const users = require("./handlers/users-handlers");
const posts = require("./handlers/posts-handlers");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/posts", posts.getAllPostsHandler);

server.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

module.exports = server;
