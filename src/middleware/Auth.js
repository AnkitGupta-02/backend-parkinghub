const bcrypt = require('bcrypt');
const { v4: uuidV4 } = require("uuid");
const {verifyEmailSent}  = require('../account');
const jwt = require('jsonwebtoken');

exports.hashPassword = async (req, res, next) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    res.status(201).send();
    next();
}

exports.verifyEmailSent = async (req, res, next) => {
    const id = uuidV4();
    const {username, email} = req.body;
    req.body.id = id;
    console.log(req.body);
    verifyEmailSent({username,email, id});
    res.status(201).send();
    next();
}

exports.authenticate = async(req,res,next) =>{
  const token = req.cookies.jwt;

  if(!token){
    return res.status(401).send({massage:"Access denied, no token provided"})
  }
  const decoded = await jwt.verify(token,process.env.JWT_KEY);
  console.log(decoded);
  req.user = decoded;
  next();
}
