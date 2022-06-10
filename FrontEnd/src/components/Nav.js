import React, { useState } from 'react';

import { observer } from 'mobx-react';
import CreateCategoryModal from './CreateCategoryModal';
import CreateIngradientModal from './CreateIngradientModal';
import CreateReciepeModal from './CreateReciepeModal';

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
        <h6>Welcome, Abdullah</h6>
        <center>
          <button>
            <span onClick={openCategoryModal}>Add Category</span>
            <CreateCategoryModal
              isOpen={categoryIsOpen}
              closeModal={closeCategoryModal}
            />
          </button>
          <button>
            <span onClick={openIngradientModal}>Add Ingradient</span>
            <CreateIngradientModal
              isOpenn={ingradientIsOpen}
              closeModall={closeIngradientModal}
            />
          </button>
          <button>
            <span onClick={openRecipeModal}>Add Recipe</span>
            <CreateReciepeModal
              isOpenn={recipeIsOpen}
              closeModall={closeRecipeModal}
            />
          </button>
        </center>
      </div>
    </>
  );
}

export default observer(Nav);
