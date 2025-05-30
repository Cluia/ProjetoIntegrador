// src/js/Login.js
import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-wrapper">
      {/* Lado esquerdo - formulário */}
      <div className="login-form">
        <div className="login-box">
          <h2 className="login-title">Bem-vindo de volta!</h2>
          <p className="login-subtitle">Acesse para continuar gerenciando seus produtos.</p>

          <form className="form">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />

            <div className="login-options">
              <a href="/esqueci-senha" className="forgot-link">Esqueceu a senha?</a>
            </div>


            <button type="submit" className="btn-login">Entrar</button>
          </form>

          <p className="cadastro-text">
            Ainda não tem uma conta? <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>
      </div>

      {/* Lado direito - arte ilustrativa */}
      <div className="login-art">
        <img src={process.env.PUBLIC_URL + '/img/arte-login.png'} alt="Arte do login" />
      </div>
    </div>
  );
}

export default Login;
