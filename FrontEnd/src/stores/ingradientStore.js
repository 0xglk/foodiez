import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class IngradientStore {
  ingradient = [];
  msg;

  constructor() {
    makeObservable(this, {
      ingradient: observable,
      fetchIngradient: action,
      createIngradient: action,
    });
  }

  fetchIngradient = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ingredient');

      this.ingradient = response.data;
    } catch (error) {
      console.log('fetchIngradient', error);
    }
  };

  createIngradient = async (ingredient) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/ingredient',
        ingredient
      );
      this.ingradient = [...this.ingradient, response.data];
    } catch (error) {
      console.log('createIngradient', error);
    }
  };
}

const ingradientStore = new IngradientStore();
ingradientStore.fetchIngradient();
export default ingradientStore;
