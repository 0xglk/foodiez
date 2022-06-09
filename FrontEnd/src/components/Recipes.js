import React, { useState } from 'react';
import { observer } from 'mobx-react';
import logo from './../img/logo.png'; 
import CategoryStore from './../stores/categoryStore';
import recipesStore from './../stores/recipesStore';
import RecipesItem from './RecipesItem';
function Recipes() {
  const [categoryy, setcategory] = useState('');
  const CategoryList = CategoryStore.Category.map((Category) =>
  <button onClick={() => setcategory(Category._id)}>{ Category.name }</button>
);

  const recipeList = recipesStore.recipes.filter((recipe) => 
  (!categoryy) ? (recipe) :  (recipe.Category === categoryy)).map((recipe) =>
  <RecipesItem recipe = {recipe} />
    );
  return (
    <>
    <div className="sidenav">
      <img alt="logo" src={logo}/>
      <h3>Foodiez</h3>
      <hr/>
      <a href="/">Categories</a>
            {CategoryList}
    </div>
    <div>
          {recipeList}
    </div>
    </>
  );
}

export default observer(Recipes);
