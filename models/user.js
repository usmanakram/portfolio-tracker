const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  lastLoginAt: { type: Date, required: true, default: Date.now },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};