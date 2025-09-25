import { tareas } from "../db/tareas.js";
import {
  obtenerTareasPorIdService,
  obtenerTareasService,
} from "../services/tareas.service.js";

export const obtenerTareasController = (req, res) => {
  const tareas = obtenerTareasService();
  res.status(200).json({ tareas });
};

export const obtenerTareasPorIdController = (req, res) => {
  const id = req.params.id;
  const tarea = obtenerTareasPorIdService(id);
  if (!tarea) return res.status(404).json({ msg: "Tarea no encontarda " });
  res.status(200).json({ tarea });
};
