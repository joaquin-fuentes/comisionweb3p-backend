import { ProductosModel } from "../models/productos.model.js";

export const obtenerProductoService = async () => {
  const productosDB = await ProductosModel.find();
  return productosDB;
};
export const obtenerProductoPorIdService = async (id) => {
  const productoBuscado = await ProductosModel.findById(id);
  return productoBuscado;
};

export const validacionCampos = (nombre, descripcion, precio) => {
  return !nombre || !precio || !descripcion;
};
export const validarCamposProductosService = (nombre, precio, descripcion) => {
  return !nombre || !precio || !descripcion;
};

export const crearProductoService = async (nuevoProducto) => {
  try {
    const nuevoProductoDb = new ProductosModel(nuevoProducto);
    await nuevoProductoDb.save();
    return { msg: "producto creado", statusCode: 201 };
  } catch (error) {
    console.error(error);
    return { msg: "Error al crear producto", statusCode: 400 };
  }
};
