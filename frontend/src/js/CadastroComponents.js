// src/js/Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          Email: email,
          Senha: senha,
          Nome_Completo: email.split('@')[0], // Nome padrão baseado no email
          Cargo: 'vendedor', // Cargo padrão para novos usuários
          Nivel_Acesso: 1 // Nível de acesso padrão
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Erro ao cadastrar');
      }

      // Redireciona para login após cadastro bem-sucedido
      navigate('/login');
    } catch (err) {
      setError(err.message);
      console.error('Erro no cadastro:', err);
    }
  };

  return (
    <div className="cadastro-wrapper">
      {/* Lado esquerdo - banner (invertido em relação ao login) */}
      <div className="cadastro-art">
        <img src={process.env.PUBLIC_URL + '/img/arte-login.png'} alt="Arte do cadastro" />
      </div>

      {/* Lado direito - formulário */}
      <div className="cadastro-form">
        <div className="cadastro-box">
          <h2 className="cadastro-title">Crie sua conta</h2>
          <p className="cadastro-subtitle">Cadastre-se para começar a comprar.</p>

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
              minLength="6"
            />

            <button type="submit" className="btn-cadastro">Cadastrar</button>
          </form>

          <p className="login-text">
            Já tem uma conta? <a href="/login">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;