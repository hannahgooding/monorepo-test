const db = require("../database/connection.js");

function getAllPosts() {
  return db.query("SELECT * FROM posts;").then((res) => res.rows);
}

module.exports = { getAllPosts };
