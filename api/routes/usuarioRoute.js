const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");

const router = Router();

router
.post("/usuario", UsuarioController.cadastrarUsuario)
  .get("/usuario", UsuarioController.buscarTodosUsuarios)
  .get("/usuario/id/:id", UsuarioController.buscarUsuarioPorId)
  .put("/usuario/id/:id")
  .delete("/usuario/id/:id");

module.exports = router;
