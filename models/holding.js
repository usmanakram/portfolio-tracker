const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema({
  baseAsset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
  quoteAsset: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  portfolio: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio', required: true },
  purchasedAt: { type: Date, required: true, default: Date.now },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

const Holding = mongoose.model('Holding', holdingSchema);

module.exports = {
  Holding
};