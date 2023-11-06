const database = require("../models");
const uuid = require("uuid");

class PermissaoService {
  async cadastrarPermissao(dto) {
    const Permissao = await database.roles.findOne({
      where: {
        nome: dto.nome,
      },
    });
    if (Permissao) {
      throw new Error("Permissao ja cadastradada");
    }
    try {
      const newPermissao = await database.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return newPermissao;
    } catch (error) {
      throw new Error("Erro ao cadastrar Permissao");
    }
  }
  async buscarTodasPermissoes() {
    const permissoes = await database.permissoes.findAll();
    return permissoes;
  }
  async buscarPermissoesId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id,
      },
    });
    if (!permissao) {
      throw new Error("permissao informada não cadastrado!");
    }
    return permissao;
  }
  async deletarPermissaoId(id) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: id,
      },
    });
    if (!permissao) {
      throw new Error("permissao não deletada!");
    }
    try {
      await database.permissoes.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
  async editarPermissaoId(dto) {
    const permissao = await database.permissoes.findOne({
      where: {
        id: dto.id,
      },
    });
    if (!permissao) {
      throw new Error("permissao informada não foi editada!");
    }
    try {
      permissao.nome = dto.nome;
      permissao.descricao = dto.descricao;
      await permissao.save();
      return await permissao.reload();
    } catch (error) {
      console.error("Message error: ", error.message);
      throw error;
    }
  }
}

module.exports = PermissaoService;
