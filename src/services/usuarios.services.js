import { usuarios } from "../db/usuarios.js";
import { CarritoModel } from "../models/carrito.model.js";
import { UsuarioModel } from "../models/usuario.model.js";
import argon from "argon2";
import jwt from "jsonwebtoken";

export const obtenerUsuariosService = () => {
  return usuarios;
};

export const obtenerUsuarioPorIdService = (id) => {
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.id === Number(id)
  );
  return usuarioEncontrado;
};

export const validarCamposUsuarioService = (nombre, apellido, email) => {
  return !nombre || !apellido || !email;
};

export function nuevoId() {
  const elMasAlto = usuarios.reduce((max, usuario) => {
    return usuario.id > max ? usuario.id : max;
  }, 0);
  return elMasAlto + 1;
}

export const crearUsuarioService = (nuevoUsuario) => {
  try {
    usuarios.push(nuevoUsuario);
    return { msg: "Usuario creado con exito", statusCode: 201 };
  } catch {
    return { msg: "Error al crear usuario", statusCode: 400 };
  }
};

export const registrarUsuarioService = async (body) => {
  try {
    const nuevoUsuarioDB = new UsuarioModel(body);
    nuevoUsuarioDB.contrasenia = await argon.hash(nuevoUsuarioDB.contrasenia);
    const nuevoCarritoDB = new CarritoModel({
      idUsuario: nuevoUsuarioDB._id,
    });
    await nuevoCarritoDB.save();
    nuevoUsuarioDB.idCarrito = nuevoCarritoDB._id;
    await nuevoUsuarioDB.save();
    return {
      statusCode: 201,
      msg: "Usuario registrado correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      msg: "Error al registrar usuario",
    };
  }
};

export const loginUsuarioService = async (body) => {
  try {
    const usuarioExistente = await UsuarioModel.findOne({
      $or: [
        { nombreUsuario: body.nombreUsuario },
        { emailUsuario: body.emailUsuario },
      ],
    });
    if (!usuarioExistente)
      return {
        statusCode: 400,
        msg: "Usuario o contraseña incorrecto - USUARIO",
      };

    const contraseniaOk = await argon.verify(
      usuarioExistente.contrasenia,
      body.contrasenia
    );

    if (!contraseniaOk)
      return {
        statusCode: 400,
        msg: "Usuario o contraseña incorrecto - CONTRASEÑIA",
      };

    // crear el token
    const payload = {
      nombreUsuario: usuarioExistente.nombreUsuario,
      emailUsuario: usuarioExistente.emailUsuario,
      rolUsuario: usuarioExistente.rolUsuario,
      idCarrito: usuarioExistente.idCarrito,
    };
    // const {contrasenia, ...payload} = usuarioExistente

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    return {
      statusCode: 200,
      msg: "Usuario logueado correctamente",
      token,
      payload,
    };
  } catch (error) {
    console.error(error);
  }
};

export const obtenerIndiceUsuario = (id) => {
  return usuarios.findIndex((usuario) => usuario.id === Number(id));
};

export const actualizarUsuarioService = (
  indiceUsuario,
  nombre,
  apellido,
  email
) => {
  usuarios[indiceUsuario] = {
    ...usuarios[indiceUsuario],
    nombre,
    apellido,
    email,
  };
  const usuarioActualizado = usuarios[indiceUsuario];
  return usuarioActualizado;
};

export const eliminarUsuarioService = (id) => {
  return usuarios.filter((usuario) => usuario.id !== id);
};
