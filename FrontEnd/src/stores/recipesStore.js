import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class RecipesStore {
  recipes = [];

  constructor() {
    makeObservable(this, {
      recipes: observable,
      fetchRecipes: action,
      createRecipe: action,
    });
  }

  fetchRecipes = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/recipe'
      );
      this.recipes = response.data;
    } catch (error) {
      console.log('fetchRecipes', error);
    }
  };

  createRecipe = async (Recipe) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/category/${Recipe.Category}/recipe`,
        Recipe
      );
      this.recipes = [...this.recipes, response.data];
    } catch (error) {
      console.log('createRecipe', error);
    }
  };

}

const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
