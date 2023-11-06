const database = require("../models");
const uuid = require("uuid");

class SeguncaService {
  async cadastrarAcl(dto) {

    const usuario = await database.usuarios.findOne({
      include: [
        {
            model: database.roles,
            as: 'usuario_roles',
            attributes: ['id', 'nome', 'descricao']
        },
        {
          model: database.permissoes,
          as: 'usuario_permissoes',
          attributes: ['id', 'nome', 'descricao']
      }
    ],
      where: {
        id: dto.usuarioId,
      },
    });
    if (usuario) {
      throw new Error("Acl ja cadastradada");
    }
    try {
      const newAcel = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });

      return newAcel;
    } catch (error) {
      throw new Error("Erro ao cadastrar Role");
    }
  }
  // async buscarTodosRoles() {
  //   const roles = await database.roles.findAll();
  //   return roles;
  // }
  // async buscarRolesId(id) {
  //   const roles = await database.roles.findOne({
  //     where: {
  //       id: id,
  //     },
  //   });

  //   if (!roles) {
  //     throw new Error("Roles informado não cadastrado!");
  //   }

  //   return roles;
  // }
  // async deletarRoleId(id) {
  //   const role = await database.roles.findOne({
  //     where: {
  //       id: id,
  //     },
  //   });

  //   if (!role) {
  //     throw new Error("Role informado não cadastrado!");
  //   }

  //   try {
  //     await database.roles.destroy({
  //       where: {
  //         id: id,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Message error: ", error.message);
  //     throw error;
  //   }
  // }

  // async editarRolesId(dto) {
  //   const role = await database.roles.findOne({
  //     where: {
  //       id: dto.id,
  //     },
  //   });

  //   if (!role) {
  //     throw new Error("Role informado não cadastrado!");
  //   }

  //   try {
  //     role.nome = dto.nome;
  //     role.descricao = dto.descricao;

  //     await role.save();

  //     return await role.reload();
  //   } catch (error) {
  //     console.error("Message error: ", error.message);
  //     throw error;
  //   }
  // }
}

module.exports = SeguncaService;
