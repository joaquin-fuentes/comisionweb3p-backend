import { colores } from "../db/colores.js";

export const obtenerColoresService = () => {
  return colores;
};
export const ObtenerColoresIdService = (id) => {
  const colorBuscado = colores.find((color) => color.id === Number(id));
  return colorBuscado;
};
