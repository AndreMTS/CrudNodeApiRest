const RouleService = require("../services/roleService");

const roleService = new RouleService();

class RouleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body;

    try {
      const roles = await roleService.cadastrar({ nome, descricao });

      res.status(201).send({ roles });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
  static async buscarTodosRoles(req, res) {
    const roles = await roleService.buscarTodosRoles();

    res.status(200).json(roles);
  }
  static async buscarRolesId(req, res) {
    try {
      const { id } = req.params;
      const role = await roleService.buscarRolesId(id);

      res.status(200).json(role);
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }
  static async deletarRolesId(req, res) {
    const { id } = req.params;

    try {
      await roleService.deletarRoleId(id);

      res.status(200).send({ message: "Role deletada com sucesso!" });
    } catch (error) {
      console.log("Message error: ", error.message);
      res.status(400).send({ message: error.message });
    }
  }

  static async editarRolesId(req, res) {
    const { id } = req.params
    const { nome, descricao } = req.body
    
    try {
        const role = await roleService.editarRolesId({ id, nome, descricao })
        
        res.status(200).json(role)
    } catch (error) {
        console.log('Message error: ', error.message)
        res.status(400).send({ message: error.message })
    }
}
}
module.exports = RouleController;
