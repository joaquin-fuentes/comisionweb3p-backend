import { mascotas } from "../db/mascotas.js";

export const obtenerMascotasService = () => {
  return mascotas;
};

export const obtenerMascotaPorIdService = (id) => {
  const mascotaEncontrado = mascotas.find(
    (mascota) => mascota.id === Number(id)
  );
  return mascotaEncontrado;
};

export const validarCamposMascotaService = (nombre, especie) => {
  return !nombre || !especie;
};

export function nuevoIdMascota() {
  const elMasAlto = mascotas.reduce((max, mascota) => {
    return mascota.id > max ? mascota.id : max;
  }, 0);
  return elMasAlto + 1;
}

export const crearMascotaService = (nuevaMascota) => {
  try {
    mascotas.push(nuevaMascota);
    return { msg: "mascota creado con exito", statusCode: 201 };
  } catch {
    return { msg: "Error al crear mascota", statusCode: 400 };
  }
};
