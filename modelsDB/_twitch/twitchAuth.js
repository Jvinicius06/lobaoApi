var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var twitchAuth = new Schema({
  scopes: {type: [String]},
  accessToken: {type: String},
  refreshToken: {type: String},
  expires_in: {type: Number, value: 0},
});

var TwitchAuth =  mongoose.model('TwitchAuth', twitchAuth);

module.exports = {twitchAuth, TwitchAuth};
