const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema({
  title: String,
  Category: String,
  image: String,
  des: String,
});

module.exports = model('Recipe', RecipeSchema);
