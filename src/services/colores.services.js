import { colores } from "../db/colores.js";

export const obtenerColoresService = () => {
  return colores;
};
export const ObtenerColoresIdService = (id) => {
  const colorBuscado = colores.find((color) => color.id === Number(id));
  return colorBuscado;
};
export const validarCamposColorService = (nombre, hex) => {
  return !nombre || !hex;
};
export function generarIdUnico(digitos = 6) {
  const max = 10 ** digitos - 1;
  const min = 10 ** (digitos - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const crearColorService = (nuevoColor) => {
  try {
    colores.push(nuevoColor);
    return { msg: "Color creado con éxito", statusCode: 201 };
  } catch {
    return { msg: "Error al crear color", statusCode: 400 };
  }
};
