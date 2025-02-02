require("dotenv").config();
const mongoose = require("mongoose");
const { Unauthorized, NotFound } = require("http-errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Invalid mobile number"],
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.statics.findByCredential = async function ({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw Unauthorized("email & password are invalid");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw Unauthorized("email & password are invalid");
  return user;
};

userSchema.methods.generateToken = function (life = "") {
  const options = {};

  if (life) {
    options.expiresIn = life;
  }
  return jwt.sign({ id: this._id.toString() }, process.env.JWT_KEY, options);
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
