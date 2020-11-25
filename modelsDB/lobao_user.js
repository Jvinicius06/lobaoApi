const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const { Schema } = mongoose;

const lobao_user = new Schema({
  name: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true},
  password: { type: String },
  randonpass: { type: String },
  facebookId: { type: String },
  deviceId: { type: String },
});

lobao_user.methods.toJSON = () => {
  const user = this;
  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
};

lobao_user.method('compare', function(formPass, userPass) {
    return bcrypt.compare(formPass, this.password)
});

const Lobao_user = mongoose.model('lobao_user', lobao_user);

module.exports = { lobao_user, Lobao_user };
