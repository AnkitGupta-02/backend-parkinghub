const {
  createUser,
  emailVerify,
  getUserByEmail,
  passwordCompare,
  createToken,
} = require("../services/userService.js");

exports.createUser = async (req, res) => {
  const data = req.body;
  await createUser(data);
  res.status(201).send();
};

exports.emailVerify = async (req, res) => {
  const { token } = req.query;
  await emailVerify({ token });
  res.status(201).send();
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await getUserByEmail({ email });
  const id = result[0].id;
  const hashPassword = result[0].password;
  const match = await passwordCompare(password, hashPassword);
  if (match && (result[0].isEmailVerified === 'Verified')) {
    const token = await createToken({ id, email });
    res.setcookie("jwt", token, {
      httpOnly: true, // Prevent access from JavaScript (for security)
      secure: true, // Use HTTPS (in production)
      maxAge: 3600000,
    });
    
  } else{
    res.status(401).send({
      err:"Your email is not verified. Please check your inbox for a verification link."
    })
  }
  res.status(201).send({ message: "Login successful" });
};

exports.userAuthInfo = (req,res) => {
  res.status(200).send({massage:'Welcome to the route!', user: req.user});
}

exports.userLogout = (req,res)  => {
  res.clearCookie('jwt');
  res.status(200).send({massage: "user sucessfully logout"});
}
