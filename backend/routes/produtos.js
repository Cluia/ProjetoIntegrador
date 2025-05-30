// backend/routes/produtos.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const { verifyToken, authorizeRole } = require('../middleware/authMiddleware');

// Rotas CRUD para Produtos (protegidas por autenticação e, algumas, por autorização)
router.post('/', verifyToken, authorizeRole('admin'), produtoController.createProduto);        // Criar (apenas admin)
router.get('/', produtoController.getAllProdutos);                                            // Listar todos (público)
router.get('/:id', produtoController.getProdutoById);                                        // Buscar por ID (público)
router.put('/:id', verifyToken, authorizeRole('admin'), produtoController.updateProduto);     // Atualizar (apenas admin)
router.delete('/:id', verifyToken, authorizeRole('admin'), produtoController.deleteProduto);  // Deletar (apenas admin)

module.exports = router;