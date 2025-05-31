// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './js/Home';
import Login from './js/LoginComponent';
import Cadastro from './js/CadastroComponents';
import Produtos from './js/Produtos';
import MousesPage from './pages/MousesPage';
import TecladosPage from './pages/TecladosPage';
import AudioPage from './pages/AudioPage';
import MonitoresPage from './pages/MonitoresPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import PromoBanner from './js/PromoBanner';
import AdminRoute from './components/AdminRoute';
import Layout from './js/Layout';
import './styles/Produtos.css';
import './styles/Home.css';

function App() {
  return (
    <div className="app-container">
      <PromoBanner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/page1" element={<MousesPage />} />
          <Route path="/page2" element={<TecladosPage />} />
          <Route path="/page3" element={<AudioPage />} />
          <Route path="/page4" element={<MonitoresPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;