import { obtenerMascotasService } from "../services/mascotas.services.js";

export const obtenerMascotasController = (req, res) => {
  const mascotas = obtenerMascotasService();
  res.status(200).json({ mascotas });
};
