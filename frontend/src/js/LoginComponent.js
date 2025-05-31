import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('adm@gmail.com');
  const [senha, setSenha] = useState('123456');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Erro ao fazer login');
      }

      login(data.token, data.user);

    } catch (err) {
      setError(err.message);
      console.error('Erro no login:', err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <div className="login-box">
          <h2 className="login-title">Bem-vindo de volta!</h2>
          <p className="login-subtitle">Acesse para continuar gerenciando seus produtos.</p>

          {error && <p className="error-message">{error}</p>}

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Digite seu e-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha" 
              name="senha" 
              placeholder="Digite sua senha" 
              required 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

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

      <div className="login-art">
        <img src={process.env.PUBLIC_URL + '/img/arte-login.png'} alt="Arte do login" />
      </div>
    </div>
  );
}

export default Login;