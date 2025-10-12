import { obtenerProductoPorIdService, obtenerProductoService } from "../services/productos.service.js";

export const obtenerProductosController = async (req, res) => {
  const productos = await obtenerProductoService();
  res.status(200).json({ productos });
};
export const obtenerProductoPorIdController = async (req,res) => {
    const id = req.params.id;
    const producto = await obtenerProductoPorIdService(id);
    if (!producto)
      return res.status(404).json({ msg: "producto no encontarda " });
    res.status(200).json({ producto });
  };
  