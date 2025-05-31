const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const { verifyToken, authorizeRole } = require('../middleware/authMiddleware');

// Rotas CRUD para Produtos
router.post('/', verifyToken, authorizeRole('admin'), produtoController.createProduto);
router.get('/', produtoController.getAllProdutos);
router.get('/:id', produtoController.getProdutoById);
router.put('/:id', verifyToken, authorizeRole('admin'), produtoController.updateProduto);
router.delete('/:id', verifyToken, authorizeRole('admin'), produtoController.deleteProduto);

module.exports = router;