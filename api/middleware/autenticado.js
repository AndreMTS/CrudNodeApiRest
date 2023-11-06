const { verify, decode } = require("jsonwebtoken");
const jsonSercret = require("../config/jsonSecret.js");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Acess token is required");
  }

  const [, acessToken] = token.split(" ");

  try {
    verify(acessToken, jsonSercret.secret);
    const { id, email } = await decode(acessToken);

    req.usuarioId = id;
    req.usuarioEmail = email;

    return next();
  } catch (error) {
    res.status(401).send("User not allowed to access");
  }
};
