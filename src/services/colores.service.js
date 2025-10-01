import { colores } from "../db/colores.js";
import { ColorModel } from "../models/color.model.js";

export const obtenerColoresService = async () => {
  try {
    const colores = await ColorModel.find();
    return colores;
  } catch (error) {
    throw new Error("Error al obtener los colores");
  }
};
export const ObtenerColoresIdService = async (id) => {
  try {
    const colorBuscado = await ColorModel.findById(id);
    return colorBuscado;
  } catch (error) {
    throw new Error("Error al obtener el color por id");
  }
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

export const actualizarColorService = async (id, body) => {
  try {
    const colorActualizado = await ColorModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    return { colorActualizado, msg: "Color actualizado.", statusCode: 200 };
  } catch (error) {
    return { msg: "Error al actualizar el color", statusCode: 400 };
  }
};

export const eliminarColorService = async (id) => {
  const colorEliminado = await ColorModel.findByIdAndDelete(id);

  return colorEliminado;
};
