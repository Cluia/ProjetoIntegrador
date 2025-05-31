// src/components/AdminRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Carregando...</div>;
  if (!user || user.role !== 'admin') return <Navigate to="/" replace />;
  
  return children;
};

export default AdminRoute;