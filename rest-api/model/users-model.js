const db = require("../database/connection.js");

function getUserById(id) {
  return db.query("SELECT * FROM users WHERE id=($1);", [id]);
}

module.exports = { getUserById };
