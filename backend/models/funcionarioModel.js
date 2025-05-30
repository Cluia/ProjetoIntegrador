// backend/models/Funcionario.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const FuncionarioSchema = new mongoose.Schema({
  Nome_Completo: {
    type: String,
    required: true,
    trim: true
  },
  CPF: {
    type: String,
    required: false, // Pode ser obrigatório se a validação estiver no frontend
    unique: true,
    sparse: true // Permite múltiplos documentos sem CPF (ou com CPF nulo)
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  Telefone: {
    type: String,
    required: false
  },
  Cargo: {
    type: String,
    required: true,
    enum: ['admin', 'gerente', 'vendedor', 'estoquista'] // Exemplos de cargos
  },
  Senha: {
    type: String,
    required: true
  },
  Nivel_Acesso: { // Pode ser usado para granularidade de permissões
    type: Number,
    default: 1 // 1: Básico, 2: Intermediário, 3: Admin
  },
  Data_Admissao: {
    type: Date,
    required: false
  },
  Ativo: {
    type: Boolean,
    default: true
  }
}, { timestamps: { createdAt: 'Data_Cadastro', updatedAt: 'Data_Atualizacao' } });

// Hook para hash da senha antes de salvar
FuncionarioSchema.pre('save', async function(next) {
  if (!this.isModified('Senha')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Senha = await bcrypt.hash(this.Senha, salt);
  next();
});

// Método para comparar senhas
FuncionarioSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Senha);
};

module.exports = mongoose.model('Funcionario', FuncionarioSchema);