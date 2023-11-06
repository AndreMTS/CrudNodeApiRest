const { Router } = require("express");
const RouleController = require('../controllers/rouleController')

const router = Router();

router
  .post("/roles", RouleController.cadastrar)
  .get("/roles", RouleController.buscarTodosRoles)
  .get("/roles/id/:id", RouleController.buscarRolesId)
  .delete("/roles/id/:id", RouleController.deletarRolesId)
  .put("/roles/id/:id", RouleController.editarRolesId);

module.exports = router;
