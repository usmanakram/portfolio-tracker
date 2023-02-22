const mongoose = require('mongoose');

const holdingSchema = new mongoose.Schema({
  assetName: { type: String, required: true },
  assetQuantity: { type: Number, required: true },
  baseCurrency: { type: String, required: true },
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