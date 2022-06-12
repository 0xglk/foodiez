const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema({
  title: String,
  Category:{type: mongoose.Schema.Types.ObjectId, ref:"Category"},
  image: String,
  des: String,
  ingredient:[String],
  createdby: String,
  createdby_name: String,
});

module.exports = model('Recipe', RecipeSchema);
