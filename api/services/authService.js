const database = require("../models");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const jsonSercret = require("../config/jsonSecret.js");

class AuthService {
  async login(dto) {
    const usuario = await database.usuarios.findOne({
      attributes: ["id", "email", "senha"],
      where: {
        email: dto.email,
      },
    });

    if (!usuario) {
      throw new Error("Usuario nao cadastrado");
    }

    const verifySenha = await compare(dto.senha, usuario.senha);
    if (!verifySenha) {
      throw new Error("Usuario(a) ou senha invalida");
    }

    const accessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      jsonSercret.secret,
      {
        expiresIn: 86400,
      }
    );

    return { accessToken };
  }
}

module.exports = AuthService;
