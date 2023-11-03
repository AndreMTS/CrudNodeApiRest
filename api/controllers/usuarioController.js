const UsuarioService = require("../services/usuarioService");
const usuarioService = new UsuarioService();

class UsuarioController {
  static async cadastrarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const usuario = await usuarioService.cadastrarUsuario({
        nome,
        email,
        senha,
      });

      res.status(201).json(usuario);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarTodosUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.buscarTodosUsuarios();
      res.status(201).json(usuarios);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.buscarUsuarioId(id);
      res.status(201).json(usuario);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = UsuarioController;
