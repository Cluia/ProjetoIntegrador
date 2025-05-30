// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register); // Rota para registrar um novo funcionário (pode ser protegida depois do primeiro admin)
router.post('/login', authController.login);       // Rota para login de funcionário

module.exports = router;