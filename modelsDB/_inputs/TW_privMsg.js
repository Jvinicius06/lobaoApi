const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
* level
* 0 - nõo segdor
* 1 - segdor
* 2 - sub
* 3 - vip
* 4 - mod
* 5 - somente streamer
*/


const tw_privMsg = new Schema({
  type: { type: String, default: 'TW_privMsg' },
  syntax: { type: String },
  value: { type: String },
  level: { type: Number, default: 0, min: 0, max: 5 },
  visible: {type: Boolean, default: true },
  enable: {type: Boolean, default: true },
  count: { type: Number, default: 0},
  response: [Schema.Types.Mixed],
});

const TW_privMsg = mongoose.model('TW_privMsg', tw_privMsg);


exports.TW_privMsg = TW_privMsg;
exports.tw_privMsg = tw_privMsg;
