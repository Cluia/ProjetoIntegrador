const express = require('express');
const router = express.Router();
const { verifyToken, authorizeAdmin } = require('../middleware/authMiddleware');

router.get('/dashboard', verifyToken, authorizeAdmin, (req, res) => {
  res.json({ 
    msg: 'Bem-vindo ao Painel Admin',
    user: req.user 
  });
});

module.exports = router;