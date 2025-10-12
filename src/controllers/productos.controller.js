import { obtenerProductoService } from "../services/productos.service.js";

export const obtenerProductosController = async (req, res) => {
  const productos = await obtenerProductoService();
  res.status(200).json({ productos });
};
