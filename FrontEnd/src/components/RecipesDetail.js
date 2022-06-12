import React, { useState } from 'react';
import { observer } from 'mobx-react';
import logo from './../img/logo.png';
import { Link, Navigate, useParams } from "react-router-dom"; 
import CategoryStore from './../stores/categoryStore';
import recipesStore from './../stores/recipesStore';
import RecipesItem from './RecipesItem';
function Recipes() {
  let {id}  = useParams();
  const recipes = recipesStore.recipes.find((recipe) => recipe._id === id);
  // console.log(membership.firstName,membership.lastName);
  return (
    <>
    <div className="sidenav">
      <img alt="logo" src={logo}/>
      <h3>Foodiez</h3>
      <hr/>
      <a href="/">Home</a>
          
    </div>
    <div>
    <div className="main">
    <h2>{recipes.title}</h2>
    <img style={{width:400}} src={recipes.image} />
    <p>{recipes.des}</p>
    <p>{recipes.ingredient.map(element => {
      return <li>{element}</li>
    })}</p>
  </div>
    </div>
    </>
  );
}

export default observer(Recipes);
