import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class IngredientStore {
  ingredient = [];
  validation = [];
  
  constructor() {
    makeObservable(this, {
      ingredient: observable,
      validation: observable,
      fetchIngredient: action,
      createIngredient: action,
      IngredientAvailable: action,
    });
  }

  fetchIngredient = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/ingredient'
      );
      this.ingredient = response.data;
    } catch (error) {
      console.log('fetchIngredient', error);
    }
  };

  IngredientAvailable = async (ingredient) => {
    try {
      const response = await axios.get(
        'http://localhost:8000/ingredient/find/all'
      );
      // this.ingredient = [...this.ingredient, response.data];
      this.validation = response.data;
    } catch (error) {
      console.log('IngredientAvailable', error);
    }
  };

  createIngredient  = async (ingredient) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/ingredient',
        ingredient
      );
      this.ingredient = [...this.ingredient, response.data];
    } catch (error) {
      console.log('createIngredient', error);
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredient();
ingredientStore.IngredientAvailable();
export default ingredientStore;
