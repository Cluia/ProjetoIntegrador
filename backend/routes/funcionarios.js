// backend/routes/funcionarios.js
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const { verifyToken, authorizeRole } = require('../middleware/authMiddleware');

// Rotas CRUD para Funcionários (todas protegidas e com restrição de acesso)
router.post('/', verifyToken, authorizeRole('admin'), funcionarioController.createFuncionario);          // Criar (apenas admin)
router.get('/', verifyToken, authorizeRole('admin'), funcionarioController.getAllFuncionarios);         // Listar todos (apenas admin)
router.get('/:id', verifyToken, authorizeRole('admin'), funcionarioController.getFuncionarioById);      // Buscar por ID (apenas admin)
router.put('/:id', verifyToken, authorizeRole('admin'), funcionarioController.updateFuncionario);       // Atualizar (apenas admin)
router.delete('/:id', verifyToken, authorizeRole('admin'), funcionarioController.deleteFuncionario);    // Deletar (apenas admin)

module.exports = router;