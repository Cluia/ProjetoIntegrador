// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token'); // Padrão comum para JWT

  if (!token) {
    return res.status(401).json({ msg: 'Nenhum token, autorização negada' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Adiciona o payload do token (id, role, email) ao objeto da requisição
    next();
  } catch (e) {
    res.status(401).json({ msg: 'Token não é válido' });
  }
};

// Middleware para verificar o nível de acesso (opcional, para controle de permissões)
const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    // req.user.role virá do payload do JWT, que definimos como o 'Cargo'
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ msg: `Acesso negado: você não tem permissão de ${requiredRole}.` });
    }
    next();
  };
};

module.exports = { verifyToken, authorizeRole };