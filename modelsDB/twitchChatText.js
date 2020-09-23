const mongoose = require('mongoose');

const { Schema } = mongoose;

const twitchChatText = new Schema({
  visible: { type: Boolean, default: true },
  indexOf: { type: Number, default: 1 },
  value: { type: String, require: true },
  level: { type: Number, default: 1 },
  output: { type: [Schema.Types.Mixed] },
});

const TwitchChatText = mongoose.model('TwitchChatText', twitchChatText);

module.exports = { twitchChatText, TwitchChatText };
