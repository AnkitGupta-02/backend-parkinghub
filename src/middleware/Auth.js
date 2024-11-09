const bcrypt = require('bcrypt');
const { v4: uuidV4 } = require("uuid");
const {verifyEmailSent}  = require('../account');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


// Middleware to hash the user's password before saving it
exports.hashPassword = async (req, res, next) => {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
}

// Middleware to send a verification email to the user
exports.sendVerificationEmail = async (req, res, next) => {
    const id = uuidV4();
    const {username, email} = req.body;

    req.body.id = id;  // Attach unique id to request body
    await verifyEmailSent({username,email, id});
    next();
}

// Middleware to authenticate user by verifying JWT token in cookies
exports.authenticate = async(req,res,next) =>{

  const token = req.cookies.jwt;

  // Check for the presence of a token
  if(!token){
    return res.status(401).send({massage:"Access denied, no token provided"})
  }

  // Verify and decode the token
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  req.user = decoded; // Attach decoded user info to request object
  next();
}
