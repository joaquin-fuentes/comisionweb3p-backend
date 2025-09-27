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

export const validarCamposMascotaService = (
  nombre,
  especie,
  raza,
  edad,
  nombreDuenio,
  telefonoDuenio,
  vacunado
) => {
  if (!nombre) {
    return "El campo 'nombre' es obligatorio.";
  }

  if (typeof nombre !== "string") {
    return "El campo 'nombre' debe ser un texto.";
  }

  if (!especie) {
    return "El campo 'especie' es obligatorio.";
  }

  if (typeof especie !== "string") {
    return "El campo 'especie' debe ser un texto.";
  }

  if (raza !== undefined && typeof raza !== "string") {
    return "El campo 'raza' es opcional. Si se informa debe ser de tipo texto.";
  }

  if (edad !== undefined && (typeof edad !== "number" || isNaN(edad))) {
    return "El campo 'edad', si se incluye, debe ser un número.";
  }

  if (nombreDuenio !== undefined && typeof nombreDuenio !== "string") {
    return "El campo 'nombre del duenio' es opcional. Si se informa debe ser de tipo texto.";
  }

  if (
    telefonoDuenio !== undefined &&
    (typeof telefonoDuenio !== "string" || !/^[\d-]+$/.test(telefonoDuenio))
  ) {
    return "El campo 'telefonoDuenio', si se incluye, debe ser un texto con dígitos y guiones.";
  }

  if (vacunado !== undefined && typeof vacunado !== "boolean") {
    return "El campo 'vacunado', si se incluye, solo puede tomar los valores true o false) .";
  }

  return null;
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
    return { msg: "mascota creada con exito", statusCode: 201 };
  } catch {
    return { msg: "Error al crear mascota", statusCode: 400 };
  }
};

export const obtenerIndiceMascota = (id) => {
  return mascotas.findIndex((mascota) => mascota.id === Number(id));
};

export const actualizarMascotaService = (
  indiceMascota,
  nombre,
  especie,
  raza,
  edad,
  nombreDuenio,
  telefonoDuenio,
  vacunado
) => {
  try {
    mascotas[indiceMascota] = {
      ...mascotas[indiceMascota],
      nombre,
      especie,
      raza,
      edad,
      nombreDuenio,
      telefonoDuenio,
      vacunado,
    };
    const mascotaActualizada = mascotas[indiceMascota];
    return {
      mascotaActualizada,
      msg: "mascota actualiada con exito",
      statusCode: 200,
    };
  } catch {
    return { msg: "Error actualizar mascota", statusCode: 400 };
  }
};

export const eliminarMascotaService = (id) => {
  const indice = obtenerIndiceMascota(id);
  if (indice === -1) return false;

  const mascotasFiltradas = mascotas.filter(
    (mascota) => mascota.id !== Number(id)
  );

  mascotas.length = 0; // vacio el array original
  mascotas.push(...mascotasFiltradas);

  return true;
};
