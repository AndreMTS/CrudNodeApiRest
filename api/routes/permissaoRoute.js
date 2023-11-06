const { Router } = require("express");
const PermissaoController = require('../controllers/permissaoController')

const router = Router();

router
  .post("/permissao", PermissaoController.cadastrarPermissao)
  .get("/permissao", PermissaoController.buscarTodasPermissoes)
  .get("/permissao/id/:id", PermissaoController.buscarPermissoesId)
  .delete("/permissao/id/:id", PermissaoController.deletarPermissaoId)
  .put("/permissao/id/:id", PermissaoController.editarPermissaoId);

module.exports = router;
