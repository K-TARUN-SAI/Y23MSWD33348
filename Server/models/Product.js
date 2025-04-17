const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "", // Optional
  },
  errorCode: {
    type: String,
    default: "", // Optional
  },
});

module.exports = mongoose.model('Product', productSchema);
