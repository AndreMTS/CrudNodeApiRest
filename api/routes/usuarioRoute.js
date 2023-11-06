const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticado = require("../middleware/autenticado.js");

const router = Router();

router.use(autenticado);

router
  .post("/usuario", UsuarioController.cadastrar)
  .get("/usuario", UsuarioController.buscarTodosUsuarios)
  .get("/usuario/id/:id", UsuarioController.buscarUsuarioPorId)
  .put("/usuario/id/:id", UsuarioController.editarUsuario)
  .delete("/usuario/id/:id", UsuarioController.deletarUsuario);

module.exports = router;
