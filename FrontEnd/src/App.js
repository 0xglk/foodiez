import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;