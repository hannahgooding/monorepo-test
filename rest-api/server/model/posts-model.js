const db = require("../database/connection");

function getAllPosts() {
  return db.query("SELECT * FROM posts;").then((res) => res.rows);
}

function getPostById(id) {
  return db.query("SELECT * FROM posts WHERE id = $1;", [id]).then((res) => res.rows[0]);
}

function addPost(user_id, text_content) {
  return db.query("INSERT INTO posts")
}

module.exports = { getAllPosts, getPostById, addPost };
