const { User } = require("../models/userSchema");

exports.createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

exports.verifyEmail = async (id) => {
  return await User.findByIdAndUpdate(id, { isVerified: true }, { new: true });
};

exports.loginUser = async ({ email, password }) => {
  const user = User.findByCredential({ email, password });
  return user;
};

exports.updateUser = async (id,value = {}) => {
  return await User.findByIdAndUpdate(id, value, { new: true });
};
