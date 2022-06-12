import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import avater from './../img/avatar.png'
import RecipesCategory from './RecipesCategory';
function RecipesItem({ recipeid }) {
  console.log(recipeid);
  return (
    <>
    {/* <Link to={`/Details/${recipe._id}`}> */}
  {/* <div> 
    <div className="recipe_card">
      <img alt="dish" src={ recipe.image }/>
      <div className="recipe_text_border">
        <h3>{ recipe.title }</h3>
        <RecipesCategory category_id ={recipe.Category} key={recipe._id} />
        <p>{ recipe.des }</p>
      </div>
      <div className="recipe_card_by">
        <img alt="avater" src={avater}/>
        <span>{recipe.createdby_name}</span>
      </div>
    </div>
    </div> */}
  {/* </Link> */}
  </>
  );
}

export default RecipesItem;
