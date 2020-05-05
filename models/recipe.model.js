const mongoose = require('mongoose');

//Schema for recipe
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  username: { type: String, required: true },  
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
  timeToCook: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;