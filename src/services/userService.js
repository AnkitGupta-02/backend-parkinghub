const pool = require("../config/db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createUser = async ({ id, username, email, password }) => {
  const isEmailVerified = "Pending";
  await pool.query("INSERT INTO `users` VALUES (?,?,?,?,?)", [
    id,
    username,
    email,
    password,
    isEmailVerified,
  ]);
};

exports.emailVerify = async ({ token }) => {
  const verifyToken = jwt.verify(token, process.env.JWT_KEY);
  await pool.query("UPDATE `users` SET `isEmailVerified` = ? WHERE `id` = ?", [
    "Verified",
    verifyToken.id,
  ]);
};

exports.getUserByEmail = async ({ email }) => {
  const [rows] = await pool.query("SELECT * FROM `users` WHERE `email` = ?", [
    email,
  ]);
  return rows;
};

exports.createToken = async ({ id, email }) => {
  const result = await jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: "1h" });
  return result;
};

exports.passwordCompare = async (password, hashPassword) => {
  const match = await bcrypt.compare(password, hashPassword);
  return match;
};
