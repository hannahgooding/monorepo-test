const express = require("express");
const PORT = process.env.PORT || 3000;
// const users = require("./handlers/users-handlers");
// const posts = require("./handlers/posts-handlers");

const server = express();
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

server.use(express.json());

// server.get("/posts", getAllPosts);
