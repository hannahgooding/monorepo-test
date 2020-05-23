const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = db;
