import { tareas } from "../db/tareas.js";
import {
  crearTareaService,
  editarTareaService,
  idUnico,
  obtenerTareasPorIdService,
  obtenerTareasService,
  validarTareasService,
  eliminarTareaService,
} from "../services/tareas.service.js";

export const obtenerTareasController = async (req, res) => {
  const tareas = await obtenerTareasService();
  res.status(200).json({ tareas });
};

export const obtenerTareasPorIdController = async (req, res) => {
  const id = req.params.id;
  const tarea = await obtenerTareasPorIdService(id);
  if (!tarea) return res.status(404).json({ msg: "Tarea no encontarda " });
  res.status(200).json({ tarea });
};

export const crearTareaController = async (req, res) => {
  const tareasValidas = validarTareasService(req.body?.descripcion);
  if (tareasValidas)
    return res.status(400).json({ msg: "Completar los campos" });
  const nuevaTarea = req.body;
  const { msg, statusCode } = await crearTareaService(nuevaTarea);
  if (statusCode === 201) {
    res.status(statusCode).json({ nuevaTarea, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const editarTareaController = async (req, res) => {
  console.log("HOLA LLEGUE AL CONTROLADOR");
  const id = req.params.id;
  const tareaEditada = await editarTareaService(id, req.body);
  const { msg, statusCode } = tareaEditada;
  if (statusCode === 200) {
    res.status(statusCode).json({ tareaEditada, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const eliminarTareaController = async (req, res) => {
  const id = req.params.id;
  const tareaEliminada = await eliminarTareaService(id);
  if (!tareaEliminada) return res.status(404).json({ msg: "No encontrada" });
  return res.status(200).json({ tareaEliminada, msg: "Tarea eliminada" });
};
