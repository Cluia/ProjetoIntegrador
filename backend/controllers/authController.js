// backend/controllers/authController.js
const Funcionario = require('../models/funcionarioModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Registro de Funcionário (para administradores ou processo inicial)
// Esta rota deve ser protegida após o primeiro admin ser criado
exports.register = async (req, res) => {
  const { Nome_Completo, CPF, Email, Telefone, Cargo, Senha, Nivel_Acesso, Ativo } = req.body;

  try {
    // Verificar se o funcionário já existe pelo email
    let funcionario = await Funcionario.findOne({ Email });

    if (funcionario) {
      return res.status(400).json({ msg: 'Funcionário já existe com este email.' });
    }
    
    // Verificar se o CPF já está em uso (se o CPF for obrigatório e único)
    if (CPF) {
      funcionario = await Funcionario.findOne({ CPF });
      if (funcionario) {
        return res.status(400).json({ msg: 'Funcionário já existe com este CPF.' });
      }
    }

    funcionario = new Funcionario({
      Nome_Completo,
      CPF,
      Email,
      Telefone,
      Cargo,
      Senha, // A senha será hashada pelo hook 'pre-save' no modelo Funcionario
      Nivel_Acesso,
      Ativo
    });

    await funcionario.save(); // Salva o novo funcionário no MongoDB

    res.status(201).json({ msg: 'Funcionário registrado com sucesso', id: funcionario._id });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// Login de Funcionário
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verificar se o funcionário existe pelo email
    let funcionario = await Funcionario.findOne({ Email: email });

    if (!funcionario) {
      return res.status(400).json({ msg: 'Credenciais inválidas' });
    }

    // Comparar senhas
    const isMatch = await funcionario.matchPassword(senha); // Usa o método definido no modelo
    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciais inválidas' });
    }

    // Gerar JWT
    const payload = {
      user: {
        id: funcionario.id, // O _id do MongoDB é acessível como .id no Mongoose
        role: funcionario.Cargo, // Usando o cargo como role no JWT
        email: funcionario.Email
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token expira em 1 hora
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};