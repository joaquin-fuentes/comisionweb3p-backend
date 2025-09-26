import { ObtenerColoresIdService, obtenerColoresService } from "../services/colores.services.js";

export const obtenerColoresController = (req, res) => {
  const colores = obtenerColoresService();
  res.status(200).json({ colores });
};
export const obtenerColorPorIdController = (req, res) => {
  const id = req.params.id;
  const color = ObtenerColoresIdService(id);
  if (!color) return res.status(404).json({ msg: "No encontrado" });
  res.status(200).json({ color });
};