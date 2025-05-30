// backend/models/Produto.js
const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  Nome: {
    type: String,
    required: true,
    trim: true
  },
  Descricao: {
    type: String,
    required: false,
    trim: true
  },
  Preco: {
    type: Number,
    required: true,
    min: 0
  },
  Quantidade_Estoque: {
    type: Number,
    required: true,
    min: 0
  },
  Categoria: {
    type: String,
    required: false,
    trim: true
  },
  SKU: {
    type: String,
    required: false,
    unique: true,
    sparse: true // Permite múltiplos documentos sem SKU (ou com SKU nulo)
  },
  Imagem_URL: {
    type: String,
    required: false
  },
  Data_Cadastro: {
    type: Date,
    default: Date.now
  },
  Data_Atualizacao: {
    type: Date,
    default: Date.now
  },
  Ativo: {
    type: Boolean,
    default: true
  }
}, { timestamps: { createdAt: 'Data_Cadastro', updatedAt: 'Data_Atualizacao' } }); // Mongoose gerencia automaticamente Data_Cadastro e Data_Atualizacao

module.exports = mongoose.model('Produto', ProdutoSchema);