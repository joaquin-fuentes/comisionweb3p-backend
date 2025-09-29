import { tareas } from "../db/tareas.js";
import {
  crearTareaService,
  editarTareaService,
  idUnico,
  obtenerTareasPorIdService,
  obtenerTareasService,
  validarTareasService,
  obtenerIndiceTarea,
  eliminarTareaService,
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

export const crearTareaController = (req, res) => {
  const { descripcion } = req.body;
  const tareasValidas = validarTareasService(descripcion);
  if (tareasValidas)
    return res.status(400).json({ msg: "Completar los campos" });
  const nuevaTarea = { id: idUnico(), descripcion };
  const { msg, statusCode } = crearTareaService(nuevaTarea);
  if (statusCode === 201) {
    res.status(statusCode).json({ nuevaTarea, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const editarTareaController = (req, res) => {
  const id = req.params.id;
  const { descripcion } = req.body;
  const tareasValidas = validarTareasService(descripcion);
  if (tareasValidas)
    return res.status(400).json({ msg: "Completar los campos" });
  const tareaExistente = obtenerIndiceTarea(id);
  if (tareaExistente === -1)
    return res.status(404).json({ msg: "Tarea no encontrada" });
  const tareaEditada = editarTareaService(tareaExistente, descripcion);
  const { msg, statusCode } = tareaEditada;
  if (statusCode === 200) {
    res.status(statusCode).json({ tareas, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const eliminarTareaController = (req, res) => {
  const id = Number(req.params.id);
  const tareaExistente = obtenerIndiceTarea(id);
  if (tareaExistente === -1)
    return res.status(404).json({ msg: "Tarea no encontrada" });
  const tareasActualizadas = eliminarTareaService(id);
  res.status(200).json({ tareasActualizadas, msg: "Tarea eliminada" });
};
