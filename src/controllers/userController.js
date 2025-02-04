const { verifyEmailSent } = require("../config/nodemailerConfig");
const {
  createUser,
  verifyEmail,
  loginUser,
  updateUser
} = require("../services/userService");

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
  if (result) {
    res.status(200).send("Email verified sucessfully");
  }
};

exports.loginUser = async (req, res) => {
  const loginCredential = req.body;
  const user = await loginUser(loginCredential);
  const token = user.generateToken();

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.status(204).send();
};

exports.getUser = async (req,res) => {
  const userData = req.user;
  res.status(200).send(userData);
}

exports.updateUser = async (req,res) => {
  const id = req.user._id;
  const updatedData = req.body;
  const updatedUser = await updateUser(id,updatedData);
  if(!updatedUser){
    res.status(400).send();
  }
  console.log(updatedUser);
  res.status(200).send("user updated successfully");
}

exports.logout = async (req,res) => {
  res.clearCookie('token', {
    httpOnly:true,
    sameSite:'none',
    secure:true,
  });
  res.status(204).send();
}
