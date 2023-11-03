const { v4: uuidv4 } = require("uuid");
const database = require("../models");
const { hash } = require("bcryptjs");

class UsuarioService {
  async cadastrarUsuario(dto) {
    const { email } = dto;

    const usuario = await database.usuarios.findOne({
      where: {
        nome: email,
      },
    });

    if (usuario) {
      throw new Error("Produto já cadastrado");
    }

    try {
      const senhaHash = await hash(dto.senha, 8);
      const newUsuario = await database.usuarios.create({
        id: uuidv4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash,
      });

      return newUsuario;
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
  async buscarTodosUsuarios() {
    const usuarios = await database.usuarios.findAll();
    return usuarios;
  }

  async buscarUsuarioId(id) {
    const usuario = await database.usuarios.findOne({
      where: {
        id: id,
      },
    });

    if (!usuario) {
      throw new Error("Usuario informado não cadastrado!");
    }

    return usuario;
  }
}

module.exports = UsuarioService;
