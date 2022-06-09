import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class RecipesStore {
  recipes = [];
  msg; 
  constructor() {
    makeObservable(this, {
      recipes: observable,
      fetchRecipes: action,
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

  createBook = async (Recipe) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/recipe',
        Recipe
      );
      this.recipes = [...this.recipes, response.data];
    } catch (error) {
      console.log('createBook', error);
    }
  };

}

const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
