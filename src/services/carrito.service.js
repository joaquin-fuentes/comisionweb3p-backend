import { CarritoModel } from "../models/carrito.model.js";
import { ProductosModel } from "../models/productos.model.js";

export const agregarProductoAlCarritoService = async (request) => {
  try {
    const idProducto = request.params.id;
    const idCarrito = request.idCarrito;
    const carritoEncontrado = await CarritoModel.findById(idCarrito);
    const producto = await ProductosModel.findById(idProducto);

    if (!producto) {
      return { msg: "Producto no encontrado", statusCode: 404 };
    }

    if (!carritoEncontrado) {
      return { msg: "Carrito no encontrado", statusCode: 404 };
    }

    // Buscar si el producto ya existe en el carrito
    const productoExistente = carritoEncontrado.productos.find(
      (item) => item.idProducto.toString() === idProducto
    );

    let cantidadAnterior = 0;
    let cantidadNueva = 1;
    let precioTotalProducto = producto.precio;

    if (productoExistente) {
      // Si el producto ya existe, incrementar la cantidad
      cantidadAnterior = productoExistente.cantidad;
      cantidadNueva = cantidadAnterior + 1;
      precioTotalProducto = producto.precio * cantidadNueva;

      // Actualizar el producto existente
      productoExistente.cantidadAnterior = cantidadAnterior;
      productoExistente.cantidad = cantidadNueva;
      productoExistente.precioTotal = precioTotalProducto;
    } else {
      // Si es un producto nuevo, agregarlo al carrito
      cantidadNueva = 1;
      cantidadNueva + 1;
      precioTotalProducto = producto.precio;
      const nuevoProducto = {
        idProducto,
        cantidad: cantidadNueva,
        cantidadAnterior: cantidadAnterior,
        precio: producto.precio,
        precioTotal: precioTotalProducto,
      };
      carritoEncontrado.productos.push(nuevoProducto);
    }

    // Calcular el precio total del carrito
    const precioTotalCarrito = carritoEncontrado.productos.reduce(
      (total, item) => {
        return total + item.precioTotal;
      },
      0
    );

    // Actualizar el precio total del carrito
    carritoEncontrado.precioTotal = precioTotalCarrito;
    console.log(carritoEncontrado);
    await carritoEncontrado.save();

    return {
      msg: "Producto agregado al carrito con éxito",
      statusCode: 201,
      data: {
        cantidadAnterior,
        cantidadNueva,
        precioTotalProducto,
        precioTotalCarrito,
      },
    };
  } catch (error) {
    console.log(error);
    return { msg: "Error al agregar el producto al carrito", statusCode: 400 };
  }
};

export const incrementarCantidadProductoService = async (request) => {
  try {
    const idProducto = request.params.id;
    const idCarrito = request.idCarrito;
    const carritoEncontrado = await CarritoModel.findById(idCarrito);
    const producto = await ProductosModel.findById(idProducto);

    if (!producto) {
      return { msg: "Producto no encontrado", statusCode: 404 };
    }

    if (!carritoEncontrado) {
      return { msg: "Carrito no encontrado", statusCode: 404 };
    }

    // Buscar si el producto existe en el carrito
    const productoExistente = carritoEncontrado.productos.find(
      (item) => item.idProducto.toString() === idProducto
    );

    if (!productoExistente) {
      return { msg: "Producto no encontrado en el carrito", statusCode: 404 };
    }

    // Guardar cantidad anterior e incrementar
    const cantidadAnterior = productoExistente.cantidad;
    const cantidadNueva = cantidadAnterior + 1;
    const precioTotalProducto = producto.precio * cantidadNueva;

    // Actualizar el producto en el carrito
    productoExistente.cantidadAnterior = cantidadAnterior;
    productoExistente.cantidad = cantidadNueva;
    productoExistente.precioTotal = precioTotalProducto;

    // Calcular el precio total del carrito
    const precioTotalCarrito = carritoEncontrado.productos.reduce(
      (total, item) => {
        return total + item.precioTotal;
      },
      0
    );

    // Actualizar el precio total del carrito
    carritoEncontrado.precioTotal = precioTotalCarrito;

    await carritoEncontrado.save();

    return {
      msg: "Cantidad del producto incrementada con éxito",
      statusCode: 200,
      data: {
        cantidadAnterior,
        cantidadNueva,
        precioTotalProducto,
        precioTotalCarrito,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      msg: "Error al incrementar la cantidad del producto",
      statusCode: 400,
    };
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

    // Recalcular el precio total del carrito después de eliminar
    const precioTotalCarrito = carritoEncontrado.productos.reduce(
      (total, item) => {
        return total + item.precioTotal;
      },
      0
    );
    carritoEncontrado.precioTotal = precioTotalCarrito;

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
