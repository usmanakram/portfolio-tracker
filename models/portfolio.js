const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = {
  Portfolio
};