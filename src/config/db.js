const mysql = require("mysql2/promise");
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

module.exports = pool;
