import {
  actualizarUsuarioService,
  crearUsuarioService,
  eliminarUsuarioService,
  loginUsuarioService,
  nuevoId,
  obtenerIndiceUsuario,
  obtenerUsuarioPorIdService,
  obtenerUsuariosService,
  registrarUsuarioService,
  validarCamposUsuarioService,
} from "../services/usuarios.services.js";

export const obtenerUsuariosController = (req, res) => {
  const usuarios = obtenerUsuariosService();
  res.status(200).json({ usuarios });
};

export const obtenerUsuarioPorIdController = (req, res) => {
  const id = req.params.id;
  const usuario = obtenerUsuarioPorIdService(id);
  if (!usuario) return res.status(404).json({ msg: "No encontrado" });
  res.status(200).json({ usuario });
};

export const crearUsuarioController = (req, res) => {
  const { nombre, apellido, email } = req.body;
  const camposValidos = validarCamposUsuarioService(nombre, apellido, email);
  if (camposValidos)
    return res
      .status(400)
      .json({ mensaje: "Debe completar todos los campos obligatorios" });
  const nuevoUsuario = {
    id: nuevoId(),
    nombre,
    apellido,
    email,
  };
  const { msg, statusCode } = crearUsuarioService(nuevoUsuario);
  if (statusCode === 201) {
    res.status(statusCode).json({ nuevoUsuario, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

// registro controlador
export const registrarUsuarioController = async (req, res) => {
  const { msg, statusCode } = await registrarUsuarioService(req.body);
  res.status(statusCode).json({ msg });
};

// login usuario
export const loginUsuarioController = async (req, res) => {
  const { msg, statusCode, token, payload } = await loginUsuarioService(
    req.body
  );
  res.status(statusCode).json({ msg, token, payload });
};

export const editarUsuarioController = (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, email } = req.body;
  const camposValidos = validarCamposUsuarioService(nombre, apellido, email);
  if (camposValidos)
    return res
      .status(400)
      .json({ mensaje: "Debe completar todos los campos obligatorios" });

  const indiceUsuario = obtenerIndiceUsuario(id);
  if (indiceUsuario === -1)
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  const usuarioActualizado = actualizarUsuarioService(
    indiceUsuario,
    nombre,
    apellido,
    email
  );
  res.status(200).json({ usuarioActualizado });
};

export const eliminarUsuarioController = (req, res) => {
  const id = Number(req.params.id);
  const usuarios = eliminarUsuarioService(id);
  res.status(200).json({ usuarios });
};
