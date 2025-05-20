import React from 'react';
import '../styles/LoginButton.css'; // Importe os estilos

const Login = () => {
  return (
    <div className="login-container">
      <h2>Página de Login</h2>
      <form className="login-form">
        <input type="email" placeholder="E-mail" className="login-input" />
        <input type="password" placeholder="Senha" className="login-input" />
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;