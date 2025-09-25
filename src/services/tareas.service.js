import { tareas } from "../db/tareas.js";

export const idUnico = () => {
  const elMasAlto = tareas.reduce(
    (max, tarea) => (tarea.id > max ? tarea.id : max),
    0
  );
  return elMasAlto + 1;
};

export const obtenerTareasService = () => {
  return tareas;
};

export const obtenerTareasPorIdService = (id) => {
  const tareaEncontrada = tareas.find((tarea) => tarea.id === Number(id));
  return tareaEncontrada;
};

export const crearTareaService = (nuevaTarea) => {
  try {
    tareas.push(nuevaTarea);
    return { msg: "Tarea creada", statusCode: 201 };
  } catch {
    return { msg: "Error al crear tarea", statusCode: 400 };
  }
};

export const validarTareasService = (descripcion) => {
  return !descripcion;
};
