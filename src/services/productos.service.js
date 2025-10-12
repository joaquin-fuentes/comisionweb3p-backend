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

export const actualizarProductoService = async (id, datosActualizados) => {
  try {
    const productoActualizado = await ProductosModel.findByIdAndUpdate(
      id,
      datosActualizados,
      {
        new: true,
        runValidators: true,
      }
    );
    return {
      productoActualizado,
      msg: "Producto actualizado",
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
    return { msg: "Error al actualizar el producto", statusCode: 400 };
  }
};
export const eliminarProductoService = async (id) => {
  const productoEliminado = await ProductosModel.findByIdAndDelete(id);
  return productoEliminado;
};
