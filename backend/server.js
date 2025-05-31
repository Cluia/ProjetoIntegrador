// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Importa a função de conexão com o MongoDB
const adminRoutes = require('./routes/admin');

// Importar rotas
const authRoutes = require('./routes/auth');
const produtoRoutes = require('./routes/produtos');
const funcionarioRoutes = require('./routes/funcionarios');

dotenv.config(); // Carrega as variáveis de ambiente

// Conectar ao banco de dados
connectDB();

const app = express();
const PORT = process.env.PORT || 3001; // Porta do servidor backend

// Middlewares
app.use(cors()); // Habilita CORS para permitir requisições do frontend
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/admin', adminRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API da Loja E-commerce de Periféricos (MongoDB) Funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});