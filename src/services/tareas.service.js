import { tareas } from "../db/tareas.js";

export const obtenerTareasService = () => {
  return tareas;
};

export const obtenerTareasPorIdService = (id) => {
  const tareaEncontrada = tareas.find((tarea) => tarea.id === Number(id));
  return tareaEncontrada;
};
