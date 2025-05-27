import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './js/Layout';
import App from './App';
import Login from './js/login';
import Produtos from './js/Produtos';
import MousesPage from './pages/MousesPage';
import TecladosPage from './pages/TecladosPage';
import AudioPage from './pages/AudioPage'; // ✅ novo
import MonitoresPage from './pages/MonitoresPage'; // ✅ novo
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/page1" element={<MousesPage />} />
        <Route path="/page2" element={<TecladosPage />} />
        <Route path="/page3" element={<AudioPage />} /> {/* ✅ novo */}
        <Route path="/page4" element={<MonitoresPage />} /> {/* ✅ novo */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
