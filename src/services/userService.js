const pool = require("../config/db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Function to create a new user with hashed password
exports.createUser = async ({ id, username, email, password }) => {
  await pool.query("INSERT INTO `users` (id,username,email,password) VALUES (?,?,?,?)", [
    id,
    username,
    email,
    password,
  ]);
};

// Function to verify email using JWT token
exports.emailVerify = async ({ token }) => {
  const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  const userId = decodedToken.id;
  await pool.query("UPDATE `users` SET `isEmailVerified` = ? WHERE `id` = ?", [
    "Verified",
     userId,
  ]);
};

// Function to retrieve user by email
exports.getUserByEmail = async ({ email }) => {
  const [rows] = await pool.query("SELECT * FROM `users` WHERE `email` = ?", [
    email,
  ]);
  return rows;
};

// Function to create a JWT token for a user
exports.createToken = async ({ id, email }) => {
  const token = jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: "1h" });
  return token;
};

// Function to compare plain and hashed passwords
exports.passwordCompare = async (password, hashPassword) => {
  const isMatch = await bcrypt.compare(password, hashPassword);
  return isMatch;
};
