import {
  actualizarProductoService,
  crearProductoService,
  eliminarProductoService,
  obtenerProductoPorIdService,
  obtenerProductoService,
  validacionCampos,
} from "../services/productos.service.js";

export const obtenerProductosController = async (req, res) => {
  const productos = await obtenerProductoService();
  res.status(200).json({ productos });
};
export const obtenerProductoPorIdController = async (req, res) => {
  const id = req.params.id;
  const producto = await obtenerProductoPorIdService(id);
  if (!producto)
    return res.status(404).json({ msg: "producto no encontarda " });
  res.status(200).json({ producto });
};
export const crearProductoController = async (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  const camposValidos = validacionCampos(nombre, precio, descripcion);
  if (camposValidos) {
    return res.status(400).json({
      msg: "Completar los campos",
    });
  }
  const nuevoProducto = req.body;
  const { msg, statusCode } = await crearProductoService(nuevoProducto);
  if (statusCode === 201) {
    res.status(statusCode).json({ nuevoProducto, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const actualizarProductoController = async (req, res) => {
  const id = req.params.id;
  const { nombre, precio, descripcion } = req.body;

  const camposValidos = validacionCampos(nombre, precio, descripcion);
  if (camposValidos) {
    return res.status(400).json({
      msg: "Completar los campos",
    });
  }

  const { productoActualizado, msg, statusCode } =
    await actualizarProductoService(id, { nombre, precio, descripcion });

  if (statusCode === 200) {
    res.status(200).json({ productoActualizado, msg });
  } else {
    res.status(statusCode || 400).json({ msg });
  }
};
export const eliminarProductoController = async (req, res) => {
  const id = req.params.id;
  const productoEliminado = eliminarProductoService(id);
  res.status(200).json({ productoEliminado });
};
