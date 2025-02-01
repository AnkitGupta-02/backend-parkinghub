const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Invalid mobile number']
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false 
  },
},{ timestamps: true });

const User = mongoose.model('User',userSchema);
module.exports = {User};
