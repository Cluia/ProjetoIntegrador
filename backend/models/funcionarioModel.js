// backend/models/funcionarioModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const FuncionarioSchema = new mongoose.Schema({
  Nome_Completo: {
    type: String,
    required: true,
    trim: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  Senha: {
    type: String,
    required: true
  },
  Cargo: {
    type: String,
    required: true,
    enum: ['admin', 'usuario'],
    default: 'usuario'
  },
  Nivel_Acesso: {
    type: Number,
    default: 1
  },
  Ativo: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

FuncionarioSchema.pre('save', async function(next) {
  if (!this.isModified('Senha')) return next();
  const salt = await bcrypt.genSalt(10);
  this.Senha = await bcrypt.hash(this.Senha, salt);
  next();
});

FuncionarioSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Senha);
};

module.exports = mongoose.model('Funcionario', FuncionarioSchema);