// src/App.js
import React from 'react';
import Home from './js/Home';
import './styles/Produtos.css';
import './styles/Home.css';
import PromoBanner from './js/PromoBanner';

function App() {
  return (
    <div className="app-container">
      <PromoBanner />
      <Home />
    </div>
  );
}

export default App;
