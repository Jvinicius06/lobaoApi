const mongoose = require('mongoose');
const { twitchData } = require('./_twitch/twitchData.js');

const { Schema } = mongoose;

const userData = new Schema({
  email: { type: String },
  twitchData: { type: twitchData },
  authorized: { type: Boolean, default: false },
  macros: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() },
  inputs: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() },
  createAt: { type: Date, default: Date.now },
});

const UserData = mongoose.model('UserData', userData);

module.exports = { userData, UserData };
