import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class CategoryStore {
  Category = [];
  msg;
  constructor() {
    makeObservable(this, {
      Category: observable,
      fetchCategories: action,
      createcategory: action,
    });
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/Category'
      );
      // console.log(response.data);
      this.Category = response.data;
    } catch (error) {
      console.log('fetchCategories', error);
    }
  };

  createcategory = async (category) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/Category',
        category
      );
      this.Category = [...this.Category, response.data];
    } catch (error) {
      console.log('createBook', error);
    }
  };

}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
