import React from 'react';
import { observer } from 'mobx-react';
import Recipes from './Recipes';
import Nav from './Nav';
function Home() {
  return (
  <>
  <Nav />
  <div className="main">
    <h2>Recipes</h2>
    <Recipes />
  </div>
  </> 
  );
}

export default observer(Home);
