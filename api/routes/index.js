const bodyParser = require("body-parser");

const produto = require("./produtoRoute");
const usuario = require("./usuarioRoute");
const auth = require("./authRoute");
const roles = require("./roleRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), auth, usuario, produto, roles);
};
