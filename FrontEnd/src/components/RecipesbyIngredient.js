import React, { useState } from 'react';
import { observer } from 'mobx-react';
import logo from './../img/logo.png';
import CategoryStore from './../stores/categoryStore';
import recipesStore from './../stores/recipesStore';
import ingredientStore from '../stores/ingredientStore';
import RecipesbyidItem from './RecipesbyidItem';
import RecipesItem from './RecipesItem';

import RecipesItemm from './RecipesItemm';
import Nav from './Nav';
function Recipes() {
  const [ingredientt, setcategory] = useState('');

  const CategoryList = ingredientStore.ingredient.map((ingredient) => (
    <button onClick={() => setcategory(ingredient._id)}>
      {ingredient.ingredient}
    </button>
  ));

  const List = ingredientStore.ingredient
    .filter((ingredient) => ingredient._id === ingredientt)
    .map((ingredient) => ingredient.recipe);
  const recipesList = List.forEach((i) => <RecipesItem recipe={i} />);
  console.log(List);
  return (
    <>
      <Nav />
      <div className="sidenav">
        <img alt="logo" src={logo} />
        <h3>Foodiez</h3>
        <hr />
        <a href="/">Categories</a>
        <button onClick={() => setcategory('')}>All</button>
        {CategoryList}
      </div>
      <div>
        <div className="main">
          <h2>My Recipes</h2>
          {recipesList}
        </div>
      </div>
    </>
  );
}

export default observer(Recipes);
