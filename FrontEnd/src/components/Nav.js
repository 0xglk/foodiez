import React, { useState } from 'react';

import { observer } from 'mobx-react';
import CreateCategoryModal from './CreateCategoryModal';
import CreateIngradientModal from './CreateIngradientModal'
// import Recipes from './Recipes'
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
  <>
  <div className="sidenavright">
    <h6>Welcome, Abdullah</h6>
    <center>
        <button>
          <span onClick={openModal}>Add Category</span>
          <CreateCategoryModal isOpen={isOpen} closeModal={closeModal} />
        </button>
        <button>
          <span onClick={openModal}>Add Ingradient</span>
          <CreateIngradientModal isOpen={isOpen} closeModal={closeModal} />
        </button>
        {/* <button>
          <span onClick={openModal}>Add Recipe</span>
        </button> */}
    </center>
  </div> 
  </> 
  );
}

export default observer(Nav);
