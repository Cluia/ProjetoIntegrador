// backend/controllers/funcionarioController.js
const Funcionario = require('../models/funcionarioModel');
const bcrypt = require('bcryptjs'); // Ainda necessário para hash manual em updates de senha

// CREATE (Adicionar novo funcionário)
exports.createFuncionario = async (req, res) => {
  const { Nome_Completo, CPF, Email, Telefone, Cargo, Senha, Nivel_Acesso, Ativo } = req.body;

  try {
    let funcionario = await Funcionario.findOne({ Email });
    if (funcionario) {
      return res.status(400).json({ msg: 'Email já cadastrado.' });
    }

    if (CPF) {
      funcionario = await Funcionario.findOne({ CPF });
      if (funcionario) {
        return res.status(400).json({ msg: 'CPF já cadastrado.' });
      }
    }

    funcionario = new Funcionario({
      Nome_Completo,
      CPF,
      Email,
      Telefone,
      Cargo,
      Senha, // O hook 'pre-save' no modelo Funcionario fará o hash
      Nivel_Acesso,
      Ativo
    });

    await funcionario.save();
    res.status(201).json({ message: 'Funcionário cadastrado com sucesso!', id: funcionario._id });

  } catch (err) {
    console.error('Erro ao cadastrar funcionário:', err);
    res.status(500).json({ msg: 'Erro ao cadastrar funcionário', error: err.message });
  }
};

// READ (Listar Todos)
exports.getAllFuncionarios = async (req, res) => {
  try {
    // Excluir o campo 'Senha' ao buscar
    const funcionarios = await Funcionario.find().select('-Senha');
    res.status(200).json(funcionarios);
  } catch (err) {
    console.error('Erro ao buscar funcionários:', err);
    res.status(500).json({ msg: 'Erro ao buscar funcionários', error: err.message });
  }
};

// READ (Buscar por ID)
exports.getFuncionarioById = async (req, res) => {
  try {
    const funcionario = await Funcionario.findById(req.params.id).select('-Senha');
    if (!funcionario) {
      return res.status(404).json({ msg: 'Funcionário não encontrado.' });
    }
    res.status(200).json(funcionario);
  } catch (err) {
    console.error('Erro ao buscar funcionário por ID:', err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'ID de funcionário inválido.' });
    }
    res.status(500).json({ msg: 'Erro ao buscar funcionário', error: err.message });
  }
};

// UPDATE
exports.updateFuncionario = async (req, res) => {
  const { id } = req.params;
  const { Senha, ...rest } = req.body; // Separa a senha do restante do corpo

  try {
    // Se a senha for fornecida, faça o hash
    if (Senha) {
      const salt = await bcrypt.genSalt(10);
      rest.Senha = await bcrypt.hash(Senha, salt);
    }
    
    // Certifica que a data de atualização é setada
    rest.Data_Atualizacao = Date.now();

    const funcionario = await Funcionario.findByIdAndUpdate(
      id,
      { $set: rest }, // Atualiza os campos fornecidos
      { new: true, runValidators: true, select: '-Senha' } // Retorna o documento atualizado e exclui a senha
    );

    if (!funcionario) {
      return res.status(404).json({ msg: 'Funcionário não encontrado para atualização.' });
    }
    res.status(200).json({ message: 'Funcionário atualizado com sucesso!', funcionario });
  } catch (err) {
    console.error('Erro ao atualizar funcionário:', err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'ID de funcionário inválido.' });
    }
    res.status(500).json({ msg: 'Erro ao atualizar funcionário', error: err.message });
  }
};

// DELETE (Exclusão Lógica - marcaremos como inativo)
exports.deleteFuncionario = async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndUpdate(
      req.params.id,
      { $set: { Ativo: false, Data_Atualizacao: Date.now() } },
      { new: true }
    );
    if (!funcionario) {
      return res.status(404).json({ msg: 'Funcionário não encontrado para desativação.' });
    }
    res.status(200).json({ message: 'Funcionário desativado (marcado como inativo) com sucesso!', funcionario });
  } catch (err) {
    console.error('Erro ao desativar funcionário:', err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'ID de funcionário inválido.' });
    }
    res.status(500).json({ msg: 'Erro ao desativar funcionário', error: err.message });
  }
};