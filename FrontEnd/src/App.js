import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import Recipesbyuser from './components/Recipesbyuser';
import RecipesbyIngredient from './components/RecipesbyIngredient';
import RecipesDetail from './components/RecipesDetail';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipesbyuser" element={<Recipesbyuser />} />
        <Route path="/RecipesDetail/:id" element={<RecipesDetail />} />
        <Route path="/RecipesbyIngredient" element={<RecipesbyIngredient />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
