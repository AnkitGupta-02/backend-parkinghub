require("dotenv").config();
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");

async function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) throw Unauthorized();

  const decoded = jwt.verify(token, process.env.JWT_KEY);

  if (!decoded.id) throw Unauthorized();

  const user = await User.findById({_id:decoded.id});

  if (!user) throw Unauthorized();
  req.user = user;
  next();
}

module.exports = auth;
