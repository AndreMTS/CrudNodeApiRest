const bodyParser = require("body-parser");

const produto = require("./produtoRoute");
const usuario = require("./usuarioRoute");
const auth = require("./authRoute");
const roles = require("./roleRoute");
const permissao = require("./permissaoRoute");
const seguranca = require("./segurancaRouter");

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    roles,
    permissao,
    seguranca
  );
};
