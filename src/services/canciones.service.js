import { CancionesModel } from "../models/canciones.models.js";

export const crearCancionService = async (nuevaCancion) => {
  try {
    const nuevaCancionDB = new CancionesModel(nuevaCancion);
    await nuevaCancionDB.save();
    return { msg: "Canción creada con éxito", statusCode: 201 };
  } catch (error) {
    console.error(error);
    return { msg: "Error al crear la canción", statusCode: 400 };
  }
};

export const obtenerCancionesService = async () => {
  try {
    const canciones = await CancionesModel.find();
    return {
      msg: "Canciones obtenidas con éxito",
      statusCode: 200,
      data: canciones,
    };
  } catch (error) {
    console.error(error);
    return { msg: "Error al obtener las canciones", statusCode: 400 };
  }
};

export const obtenerCancionesPorIdservice = async (id) => {
  try {
    const cancionEncontrada = await CancionesModel.findById(id);
    return {
      msg: "Cancion encontrada con exito",
      statusCode: 200,
      data: cancionEncontrada,
    };
  } catch (error) {
    console.error(error);
    return { msg: "Error al encontrar la cancion", statusCode: 400 };
  }
};

export const actualizarCancionService = async (id, body) => {
  try {
    const cancionActualizadaDB = await CancionesModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    return {
      msg: "Cancion actualizada con exito",
      statusCode: 200,
      data: cancionActualizadaDB,
    };
  } catch (error) {
    console.error(error);
    return { msg: "Error al actualizar la cancion", statusCode: 400 };
  }
};
