const mongoose = require('mongoose');

const { Schema } = mongoose;

const lobao_item = new Schema({
  image_path: { type: String },
  name: { type: String },
  descp: { type: String },
  quant: { type: Number },
  marks: [String],
  price: { type: Number },
  rebate: { type: Number },
  createAt: { type: Date, default: Date.now },
});

const Lobao_item = mongoose.model('lobao_item', lobao_item);

module.exports = { lobao_item, Lobao_item };
