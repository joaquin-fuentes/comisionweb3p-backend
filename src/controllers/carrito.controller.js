import { agregarProductoAlCarritoService, eliminarProductoDelCarritoService } from "../services/carrito.service.js";

export const agregarProductoAlCarritoController = async (req, res) => {
  const { statusCode, msg } = await agregarProductoAlCarritoService(req);
  return res.status(statusCode).json({ msg });
};

export const eliminarProductoDelCarritoController = async (req, res) => {
  const { statusCode, msg } = await eliminarProductoDelCarritoService(req);
  return res.status(statusCode).json({ msg });
};
