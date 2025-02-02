require("dotenv").config();
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");

async function auth(req, res, next) {
  const token = req.header("Cookie")?.replace("token=", "");
  if (!token) throw Unauthorized();

  const { id } = jwt.verify(token, process.env.JWT_KEY);

  if (!id) throw Unauthorized();

  const user = User.findById(id);

  if (!user) throw Unauthorized();

  req.user = user;
  next();
}

module.exports = auth;
