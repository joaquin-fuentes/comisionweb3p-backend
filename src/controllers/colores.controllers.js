import { obtenerColoresService } from "../services/colores.services.js";

export const obtenerColoresController = (req, res) => {
  const colores = obtenerColoresService();
  res.status(200).json({ colores });
};
