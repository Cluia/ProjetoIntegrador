// backend/controllers/produtoController.js
const Produto = require('../models/produtoModel');

// CREATE
exports.createProduto = async (req, res) => {
  try {
    const newProduto = new Produto(req.body); // O corpo da requisição mapeia diretamente para o modelo
    await newProduto.save();
    res.status(201).json({ message: 'Produto criado com sucesso!', produto: newProduto });
  } catch (err) {
    console.error('Erro ao criar produto:', err);
    res.status(500).json({ msg: 'Erro ao criar produto', error: err.message });
  }
};

// READ (Listar Todos)
exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find({ Ativo: true }); // Buscar apenas produtos ativos
    res.status(200).json(produtos);
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    res.status(500).json({ msg: 'Erro ao buscar produtos', error: err.message });
  }
};

// READ (Buscar por ID)
exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findOne({ _id: req.params.id, Ativo: true });
    if (!produto) {
      return res.status(404).json({ msg: 'Produto não encontrado ou inativo.' });
    }
    res.status(200).json(produto);
  } catch (err) {
    console.error('Erro ao buscar produto por ID:', err);
    // Erro de casting se o ID não for um ObjectId válido
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'ID de produto inválido.' });
    }
    res.status(500).json({ msg: 'Erro ao buscar produto', error: err.message });
  }
};

// UPDATE
exports.updateProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, Data_Atualizacao: Date.now() }, // Atualiza os campos e a data de atualização
      { new: true, runValidators: true } // Retorna o documento atualizado e roda as validações
    );
    if (!produto) {
      return res.status(404).json({ msg: 'Produto não encontrado para atualização.' });
    }
    res.status(200).json({ message: 'Produto atualizado com sucesso!', produto });
  } catch (err) {
    console.error('Erro ao atualizar produto:', err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'ID de produto inválido.' });
    }
    res.status(500).json({ msg: 'Erro ao atualizar produto', error: err.message });
  }
};

// DELETE (Exclusão Lógica - marcaremos como inativo)
exports.deleteProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      { $set: { Ativo: false, Data_Atualizacao: Date.now() } },
      { new: true }
    );
    if (!produto) {
      return res.status(404).json({ msg: 'Produto não encontrado para desativação.' });
    }
    res.status(200).json({ message: 'Produto desativado (marcado como inativo) com sucesso!', produto });
  } catch (err) {
    console.error('Erro ao desativar produto:', err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'ID de produto inválido.' });
    }
    res.status(500).json({ msg: 'Erro ao desativar produto', error: err.message });
  }
};