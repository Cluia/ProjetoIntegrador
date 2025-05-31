// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UsuariosCRUD from '../components/admin/UsuariosCRUD';
import EstoqueCRUD from '../components/admin/EstoqueCRUD';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('usuarios');

  return (
    <div className="admin-dashboard">
      <h1>Painel Administrativo</h1>
      
      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === 'usuarios' ? 'active' : ''}`}
          onClick={() => setActiveTab('usuarios')}
        >
          Usuários
        </button>
        <button 
          className={`tab-button ${activeTab === 'estoque' ? 'active' : ''}`}
          onClick={() => setActiveTab('estoque')}
        >
          Estoque
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'usuarios' && <UsuariosCRUD />}
        {activeTab === 'estoque' && <EstoqueCRUD />}
      </div>
    </div>
  );
}

export default AdminDashboard;