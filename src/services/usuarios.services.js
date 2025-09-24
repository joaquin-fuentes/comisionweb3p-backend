import { usuarios } from "../db/usuarios.js";

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
