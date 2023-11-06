const SegurancaService = require("../services/SegurancaService");

const segurancaService = new SegurancaService();

class SegurancaController {
  static async cadastrarAcl(req, res) {
    const { roles, permissoes } = req.body;
    const {usuarioId} = req
    
    try {
      const acl = await segurancaService.cadastrarAcl({ roles, permissoes, usuarioId });

      res.status(201).send({ acl });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
//   static async buscarTodosRoles(req, res) {
//     const roles = await roleService.buscarTodosRoles();

//     res.status(200).json(roles);
//   }
//   static async buscarRolesId(req, res) {
//     try {
//       const { id } = req.params;
//       const role = await roleService.buscarRolesId(id);

//       res.status(200).json(role);
//     } catch (error) {
//       console.log("Message error: ", error.message);
//       res.status(400).send({ message: error.message });
//     }
//   }
//   static async deletarRolesId(req, res) {
//     const { id } = req.params;

//     try {
//       await roleService.deletarRoleId(id);

//       res.status(200).send({ message: "Role deletada com sucesso!" });
//     } catch (error) {
//       console.log("Message error: ", error.message);
//       res.status(400).send({ message: error.message });
//     }
//   }

//   static async editarRolesId(req, res) {
//     const { id } = req.params
//     const { nome, descricao } = req.body
    
//     try {
//         const role = await roleService.editarRolesId({ id, nome, descricao })
        
//         res.status(200).json(role)
//     } catch (error) {
//         console.log('Message error: ', error.message)
//         res.status(400).send({ message: error.message })
//     }
// }
}
module.exports = SegurancaController;
