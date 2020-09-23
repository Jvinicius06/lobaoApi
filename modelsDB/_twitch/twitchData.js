var mongoose = require('mongoose');
var { twitchAuth } = require('./twitchAuth')
var Schema = mongoose.Schema;

var twitchData = new Schema({
  user: {type: String},
  twitchAuth : {type: twitchAuth},
  id: {type: String},
  login: {type: String},
  display_name: {type: String},
  type: {type: String},
  broadcaster_type: {type: String},
  description: {type: String},
  profile_image_url: {type: String},
  offline_image_url: {type: String},
  view_count: {type: Number}
});

var TwitchData =  mongoose.model('TwitchData', twitchData);

module.exports = {twitchData, TwitchData};
