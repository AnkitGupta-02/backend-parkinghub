const { verifyEmailSent } = require("../config/nodemailerConfig");
const { createUser, verifyEmail} = require("../services/userService");

exports.createUser = async (req, res) => {
  const userdata = req.body;
  if (!userdata) {
    return res.status(400).send("req.body cannot be empty");
  }
  const user = await createUser(userdata);
  if (!user) {
    return res.status(400);
  } else {
  await verifyEmailSent(user);
  }
  res.status(201).send("created sucessfully");
};

exports.verifyEmail = async (req, res) => {
   const result = await verifyEmail(req.userId);
   if(result){
    res.status(200).send("Email verified sucessfully");
   }
};
