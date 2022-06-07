const { model, Schema } = require('mongoose');

const IngradientSchema = new Schema({
  title_recipe: String,
  ingradient: Array,
});

module.exports = model('Ingradient', IngradientSchema);
