const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const IngradientSchema = new Schema({
  ingredient : String,
  recipe:[{type: mongoose.Schema.Types.ObjectId, ref:"Recipe"}],
});

module.exports = model('Ingradient', IngradientSchema);
