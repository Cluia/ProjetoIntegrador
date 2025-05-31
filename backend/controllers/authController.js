// backend/controllers/authController.js
const Funcionario = require('../models/funcionarioModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.register = async (req, res) => {
  const { Email, Senha } = req.body;

  try {
    // Verificar se já existe usuário com este email
    const funcionarioExistente = await Funcionario.findOne({ Email });
    if (funcionarioExistente) {
      return res.status(400).json({ msg: 'Este e-mail já está cadastrado.' });
    }

    // Verificar se é o primeiro usuário do sistema (tornar admin)
    const totalFuncionarios = await Funcionario.countDocuments();
    const isFirstUser = totalFuncionarios === 0;

    const novoFuncionario = new Funcionario({
      Nome_Completo: req.body.Nome_Completo || Email.split('@')[0],
      Email,
      Senha,
      Cargo: isFirstUser ? 'admin' : 'usuario',
      Nivel_Acesso: isFirstUser ? 3 : 1,
      Ativo: true
    });

    await novoFuncionario.save();

    res.status(201).json({ 
      msg: 'Cadastro realizado com sucesso',
      isAdmin: novoFuncionario.Cargo === 'admin'
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const funcionario = await Funcionario.findOne({ Email: email });
    if (!funcionario) {
      return res.status(400).json({ msg: 'Credenciais inválidas' });
    }

    const isMatch = await funcionario.matchPassword(senha);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciais inválidas' });
    }

    const payload = {
      user: {
        id: funcionario.id,
        role: funcionario.Cargo,
        email: funcionario.Email
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '8h' },
      (err, token) => {
        if (err) throw err;
        res.json({ 
          token,
          user: {
            id: funcionario.id,
            email: funcionario.Email,
            role: funcionario.Cargo
          }
        });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};