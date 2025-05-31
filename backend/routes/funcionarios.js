const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const { verifyToken, authorizeRole } = require('../middleware/authMiddleware');

// Rotas CRUD para Funcionários
router.post('/', verifyToken, authorizeRole('admin'), funcionarioController.createFuncionario);
router.get('/', verifyToken, authorizeRole('admin'), funcionarioController.getAllFuncionarios);
router.get('/:id', verifyToken, authorizeRole('admin'), funcionarioController.getFuncionarioById);
router.put('/:id', verifyToken, authorizeRole('admin'), funcionarioController.updateFuncionario);
router.delete('/:id', verifyToken, authorizeRole('admin'), funcionarioController.deleteFuncionario);

module.exports = router;