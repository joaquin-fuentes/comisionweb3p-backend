import { eliminarTareaController } from "../controllers/tareas.controller.js";
import { TareaModel } from "../models/tarea.model.js";

export const idUnico = () => {
  const elMasAlto = tareas.reduce(
    (max, tarea) => (tarea.id > max ? tarea.id : max),
    0
  );
  return elMasAlto + 1;
};

export const obtenerTareasService = async () => {
  const tareasDB = await TareaModel.find();
  return tareasDB;
};

export const obtenerTareasPorIdService = async (id) => {
  const tareaEncontrada = await TareaModel.findById(id);
  return tareaEncontrada;
};

export const crearTareaService = async (nuevaTarea) => {
  try {
    const nuevaTareaDB = new TareaModel(nuevaTarea);
    await nuevaTareaDB.save();
    return { msg: "Tarea creada", statusCode: 201 };
  } catch (error) {
    console.error(error);
    return { msg: "Error al crear tarea", statusCode: 400 };
  }
};

export const validarTareasService = (descripcion) => {
  return !descripcion;
};

export const editarTareaService = async (id, body) => {
  try {
    const tareaEditada = await TareaModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    return { tareaEditada, msg: "Tarea actualizada", statusCode: 200 };
  } catch (error) {
    console.log(error);
    return { msg: "Error al actualizar tarea", statusCode: 400 };
  }
};

export const eliminarTareaService = async (id) => {
  const tareaEliminada = await TareaModel.findByIdAndDelete(id);
  return tareaEliminada;
};
