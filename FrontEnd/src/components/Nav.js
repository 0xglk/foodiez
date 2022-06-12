import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from './../img/avatar.png'; 
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { observer } from 'mobx-react';
import CreateCategoryModal from './CreateCategoryModal';
import CreateIngredientModal from './CreateIngredientModal'
import CreateRecipeModal from './CreateRecipeModal'
import SigninModal from "./login/SigninModal";
import SignupModal from "./login/SignupModal";
import authStore from "../stores/authStore";
// import Recipes from './Recipes'
function Nav() {
  const [categoryIsOpen, setCategoryIsOpen] = useState(false);
  const closeCategoryModal = () => setCategoryIsOpen(false);
  const openCategoryModal = () => setCategoryIsOpen(true);

  const [ingradientIsOpen, setIngradientIsOpen] = useState(false);
  const closeIngradientModal = () => setIngradientIsOpen(false);
  const openIngradientModal = () => setIngradientIsOpen(true);

  const [recipeIsOpen, setRecipeIsOpen] = useState(false);
  const closeRecipeModal = () => setRecipeIsOpen(false);
  const openRecipeModal = () => setRecipeIsOpen(true);
  return (
  <>
  <div className="sidenavright">
    <center>
    {authStore.user ? (
            <>
            <img src={avatar} />
              <h3>Welcome {authStore.user.username}</h3>
              <div className='control_buton_link'>
              <Link to={`/Recipesbyuser`}>
              <button> My Recipes </button>
          </Link>
          </div>
          <button>
            <span onClick={openCategoryModal}>Add Category</span>
            <CreateCategoryModal
              isOpen={categoryIsOpen}
              closeModal={closeCategoryModal}
            />
          </button>
          <button>
            <span onClick={openIngradientModal}>Add Ingradient</span>
            <CreateIngredientModal
              isOpenn={ingradientIsOpen}
              closeModal={closeIngradientModal}
            />
          </button>
          <button>
            <span onClick={openRecipeModal}>Add Recipe</span>
            <CreateRecipeModal
              isOpenn={recipeIsOpen}
              closeModall={closeRecipeModal}
            />
          </button>
          <button className="red_button" onClick={authStore.signout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <SignupModal />
              <SigninModal />
            </>
          )}
    </center>
  </div> 
  </> 
  );
}

export default observer(Nav);
