import React, { useState } from 'react';
import { observer } from 'mobx-react';
import logo from './../img/logo.png';
import { Link, Navigate, useParams } from 'react-router-dom';
import CategoryStore from './../stores/categoryStore';
import recipesStore from './../stores/recipesStore';
import RecipesItem from './RecipesItem';
import Nav from './Nav';

function Recipes() {
  let { id } = useParams();
  const recipes = recipesStore.recipes.find((recipe) => recipe._id === id);
  // console.log(membership.firstName,membership.lastName);
  return (
    <>
      <div className="sidenav">
        <img alt="logo" src={logo} />
        <h3>Foodiez</h3>
        <hr />
        <Link to="/">
          <h3 className="Home-button">Home</h3>
        </Link>
      </div>
      <div>
        <Nav />
        <div className="main">
          <div className="recipe-detail-main">
            <img
              className="recipe-detail-left"
              style={{ width: 400 }}
              src={recipes.image}
            />
            <div className="recipe-detail-right">
              <h2>{recipes.title}</h2>

              <p>
                {recipes.ingredient.map((element) => {
                  return <li>{element}</li>;
                })}
              </p>
            </div>
          </div>
          <p>By: {recipes.createdby_name}</p>
          <p>{recipes.des}</p>
        </div>
      </div>
    </>
  );
}

export default observer(Recipes);
