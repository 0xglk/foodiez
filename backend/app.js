const express = require('express');
const app = express();
const cors = require("cors");
const connectDb = require('./database');

const categoriesRoutes = require('./api/categories/categories.routes');
const RecipesRoutes = require('./api/recipes/recipes.routes');
const IngredientRoutes = require('./api/Ingredient/Ingredient.routes');


//middleware
app.use(cors());
app.use(express.json());
app.use('/category', categoriesRoutes);
app.use('/recipe', RecipesRoutes);
app.use('/ingredient', IngredientRoutes);

//error handling middleware
app.use((err, req, res, next) =>{
  res.status(err.status || 500 ).json({message: err.message || "Internal Server Error"});
})

//Path not found
app.use((req, res, next) =>{
  res.status(404).json({message: "path not found"});
  // res.redirect("/api/events/all")
})



connectDb();

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
