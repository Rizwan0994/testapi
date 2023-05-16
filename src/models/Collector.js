// Collector.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const collectorSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

collectorSchema.methods.comparePassword = function (password) {
  if (!password || !this.password) {
    return false;
  }
  
  return bcrypt.compareSync(password, this.password);
};

collectorSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { contact: this.contact },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  );
  return token;
};

const Collector = mongoose.model('Collector', collectorSchema);

module.exports = Collector;