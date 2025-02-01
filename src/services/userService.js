const {User} = require('../models/userSchema');

exports.createUser = async (data) => {
   const user = new User(data);
    await user.save();
    return user;
}