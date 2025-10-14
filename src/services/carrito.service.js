import { CarritoModel } from "../models/carrito.model.js";
import { ProductosModel } from "../models/productos.model.js";

export const agregarProductoAlCarritoService = async (request) => {
  try {
    const idProducto = request.params.id;
    const idCarrito = request.idCarrito;
    const carritoEncontrado = await CarritoModel.findById(idCarrito);
    const producto = await ProductosModel.findById(idProducto);
    const cantidadAnterior = 2;
    carritoEncontrado.productos.push({
      idProducto,
      cantidad: cantidadAnterior + 1,
      precio: producto.precio,
      precioTotal: producto.precio * cantidadAnterior + 1,
    });
    await carritoEncontrado.save();
    return { msg: "Producto agregado al carrito con éxito", statusCode: 201 };
  } catch (error) {
    console.log(error);
    return { msg: "Error al agregar el producto al carrito", statusCode: 400 };
  }
};

export const eliminarProductoDelCarritoService = async (request) => {
  try {
    const idProducto = request.params.id;
    const idCarrito = request.idCarrito;
    const carritoEncontrado = await CarritoModel.findById(idCarrito);
    const producto = await ProductosModel.findById(idProducto);
    const indiceProducto = carritoEncontrado.productos.findIndex(
      (producto) => producto._id === idProducto
    );
    carritoEncontrado.productos.splice(indiceProducto, 1);
    await carritoEncontrado.save();
    return { msg: "Producto eliminado del carrito con éxito", statusCode: 201 };
  } catch (error) {
    console.log(error);
    return {
      msg: "Error al eliminar el producto del carrito",
      statusCode: 400,
    };
  }
};
