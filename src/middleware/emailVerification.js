require("dotenv").config();
const jwt = require("jsonwebtoken");
const {NotFound} = require('http-errors')

async function emailVerification(req, res, next) {
  const token = req.query.token;
  if(!token) throw NotFound("token not provided");
  const { id } = jwt.verify(token, process.env.JWT_KEY);
  if(!id) throw NotFound("Invalid token");
  req.userId = id;
  next();
}
module.exports = emailVerification;