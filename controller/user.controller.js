const {
  updateUser,
  deleteUserById,
  createUser,
  getUserById,
  getAllUsers,
  findByCredentials,
} = require("../Services/userServices");

const compare = (arg1, arg2) => arg1 == arg2;

exports.getAllUser = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

exports.getUserById = async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.json({ message: "User dose'nt exist" });
  res.send(user);
};

exports.createUser = async (req, res) => {
  const user = await createUser(req.body);
  res.send(user);
};

exports.updateUser = async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.send(user);
};

exports.deleteUser = async (req, res) => {
  const user = await deleteUserById(req.params.id);
  res.send(user);
};

exports.loginUser = async (req, res) => {
  try {
    const user = await findByCredentials(req.body.email, req.body.password);

    if (!user) {
      return res.json({ error: "user doesn't exist with given email" });
    }

    if (!compare(req.body.password, user.password)) {
      return res.json({ error: "Unable to login" });
    }

    res.send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send("Unfounded error");
  }
};
