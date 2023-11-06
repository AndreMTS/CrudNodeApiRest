const PermissaoService = require("../services/permissaoService");

const permissaoService = new PermissaoService();

class PermissaoController {
  static async cadastrarPermissao(req, res) {
    const { nome, descricao } = req.body;

    try {
      const permissao = await permissaoService.cadastrarPermissao({ nome, descricao });

      res.status(201).send({ permissao });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
  static async buscarTodasPermissoes(req, res) {
    const permissoes = await permissaoService.buscarTodasPermissoes();

    res.status(200).json(permissoes);
  }
  static async buscarPermissoesId(req, res) {
    try {
      const { id } = req.params;
      const permissoes = await permissaoService.buscarPermissoesId(id);

      res.status(200).json(permissoes);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }
  static async deletarPermissaoId(req, res) {
    const { id } = req.params;

    try {
      await permissaoService.deletarPermissaoId(id);

      res.status(200).send({ message: "Permissao deletada com sucesso!" });
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async editarPermissaoId(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const permissao = await permissaoService.editarPermissaoId({ id, nome, descricao });

      res.status(200).json(permissao);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }
}
module.exports = PermissaoController;
