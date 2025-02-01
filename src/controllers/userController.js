const { createUser } = require("../services/userService");

exports.createUser = async (req, res) => {
  const userdata = req.body;
  if (!userdata) {
    return res.status(400).send("req.body cannot be empty");
  }
  const result = await createUser(userdata);
  if (!result) {
    return res.status(400);
  }
  res.status(201).send("created sucessfully");
};
