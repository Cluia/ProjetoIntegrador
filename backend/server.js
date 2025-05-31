const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Importar rotas
const authRoutes = require('./routes/auth');
const produtoRoutes = require('./routes/produtos');
const funcionarioRoutes = require('./routes/funcionarios');
const adminRoutes = require('./routes/admin');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('API da Loja E-commerce de Periféricos (MongoDB) Funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});