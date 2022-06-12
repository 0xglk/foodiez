import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import avater from './../img/avatar.png';
import RecipesCategory from './RecipesCategory';
function RecipesItem({ array }) {
  console.log(array);
  return (
    <>
      <Link to={`/RecipesDetail/`}>
        <div>
          <div className="recipe_card">
            <div className="recipe_text_border"></div>
            <div className="recipe_card_by">
              <img alt="avater" src={avater} />
              <span></span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default RecipesItem;
