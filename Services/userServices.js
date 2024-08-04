const User = require("../model/User");

exports.getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

exports.getUserById = async (id) => {
  const user = await User.findAll({
    where: {
      id,
    },
  });
  return user;
};

exports.createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

exports.updateUser = async (id, data) => {
  const user = await User.update(
    {
      data,
    },
    {
      where: {
        id,
      },
    }
  );
  return user;
};

exports.deleteUserById = async (id) => {
  const user = await User.destroy({
    where: {
      id,
    },
  });
  return user;
};

exports.findByCredentials = async (email) => {
  const user = await User.findAll({ where: { email } });
  return user[0];
};
