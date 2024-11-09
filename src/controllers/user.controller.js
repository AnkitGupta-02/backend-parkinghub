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
  res.status(201).send({ message: "User created successfully." });
};  

exports.emailVerify = async (req, res) => {
  const { token } = req.query;
  await emailVerify({ token });
  res.status(200).send({ message: "Email verified successfully." });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await getUserByEmail({ email });

  if (result.length === 0) {
    return res.status(404).send({ error: "User not found." });
  }

 const { id, password: hashPassword, isEmailVerified } = result[0];
  const isMatch = await passwordCompare(password, hashPassword);

  if (isMatch && (isEmailVerified === 'Verified')) {
    const token = await createToken({ id, email });
    res.cookie("jwt", token, {
      httpOnly: true, // Prevent access from JavaScript (for security)
      secure: true, // Use HTTPS (in production)
      maxAge: 3600000,
    });
    return res.status(200).send({ message: "Login successful." });
  } else{
    return res.status(401).send({ error: "Invalid credentials or unverified email." });
  }
};

exports.userAuthInfo = (req,res) => {
  res.status(200).send({message:'Welcome to the route!', user: req.user});
}

exports.userLogout = (req,res)  => {
  res.clearCookie('jwt');
  res.status(200).send({message: "User successfully logged out."});
}
