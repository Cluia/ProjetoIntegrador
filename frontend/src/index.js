import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe o BrowserRouter e Routes
import App from './App';
import Login from './js/login'; // Importe a página de login

// Crie uma raiz para o ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o aplicativo dentro do Router
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Rota principal */}
      <Route path="/login" element={<Login />} /> {/* Rota de login */}
    </Routes>
  </BrowserRouter>
);