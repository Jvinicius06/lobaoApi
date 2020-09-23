const mongoose = require('mongoose');

const { Schema } = mongoose;

const inputs = new Schema({
  rules: { type: Schema.Types.Mixed },
  data: [Schema.Types.Mixed],
});

const Inputs = mongoose.model('Inputs', inputs);

module.exports = { inputs, Inputs };
