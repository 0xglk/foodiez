import React, { useState } from 'react';
import { observer } from 'mobx-react';
import logo from './../img/logo.png';
import CategoryStore from './../stores/categoryStore';
import recipesStore from './../stores/recipesStore';
import RecipesItem from './RecipesItem';
import Nav from './Nav';
import authStore from '../stores/authStore';
import { Link } from 'react-router-dom';

function Recipes() {
  const [categoryy, setcategory] = useState('');
  const CategoryList = CategoryStore.Category.map((Category) => (
    <button
      className="left-nav-button"
      onClick={() => setcategory(Category._id)}
    >
      {Category.name}
    </button>
  ));

  const recipeList = recipesStore.recipes
    .filter((recipe) =>
      !categoryy
        ? recipe.createdby === authStore.user._id
        : recipe.createdby === authStore.user._id &&
          recipe.Category === categoryy
    )
    .map((recipe) => <RecipesItem recipe={recipe} />);
  return (
    <>
      <Nav />
      <div className="sidenav">
        <img alt="logo" src={logo} />
        <h3>Foodiez</h3>
        <hr />
        <Link to="/">
          <h3 className="Home-button">Home</h3>
        </Link>
        <hr />
        <h2 className="cate">Categories:</h2>
        <button onClick={() => setcategory('')}>All</button>
        {CategoryList}
      </div>
      <div>
        <div className="main">
          <h2>My Recipes</h2>
          {recipeList}
        </div>
      </div>
    </>
  );
}

export default observer(Recipes);
