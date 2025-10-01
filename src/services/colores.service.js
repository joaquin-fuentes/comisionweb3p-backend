import { colores } from "../db/colores.js";
import { ColorModel } from "../models/color.model.js";

export const obtenerColoresService = () => {
  return colores;
};
export const ObtenerColoresIdService = (id) => {
  const colorBuscado = colores.find((color) => color.id === Number(id));
  return colorBuscado;
};
export const validarCamposColorService = (nombre, codigoHex) => {
  return !nombre || !codigoHex;
};
export function generarIdUnico(digitos = 6) {
  const max = 10 ** digitos - 1;
  const min = 10 ** (digitos - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const crearColorService = async (body, statusCode, msg) => {
  try {
    const nuevoColor = new ColorModel(body);
    await nuevoColor.save();

    return { msg: "Color creado con éxito", statusCode: 201 };
  } catch (error) {
    console.log(error);
    return { msg: "Error al crear color", statusCode: 400 };
  }
};

export const actualizarColorService = (id, nombre, codigoHex) => {
  const indiceColor = colores.findIndex((color) => color.id === Number(id));
  if (indiceColor === -1) return null;
  colores[indiceColor] = { id: Number(id), nombre, codigoHex };
  const colorActualizado = colores[indiceColor];
  return colorActualizado;
};
export const eliminarColorService = (id) => {
  return colores.filter((color) => color.id !== Number(id));
};
