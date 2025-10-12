import { ProductosModel } from "../models/productos.model.js";

export const obtenerProductoService = async () => {
  const productosDB = await ProductosModel.find();
  return productosDB;
};