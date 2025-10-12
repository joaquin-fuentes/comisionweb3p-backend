import { ProductosModel } from "../models/productos.model.js";

export const obtenerProductoService = async () => {
  const productosDB = await ProductosModel.find();
  return productosDB;
};
export const obtenerProductoPorIdService = async (id) => {
  const productoBuscado = await ProductosModel.findById(id);
  return productoBuscado;
};
