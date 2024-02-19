const mongoose = require('mongoose');

const mockupSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: String,
  color: String,
  image: String,
  producer: String,
  text: String,
  title: String
});

const Mockup = mongoose.model('Mockup', mockupSchema);

module.exports = Mockup;