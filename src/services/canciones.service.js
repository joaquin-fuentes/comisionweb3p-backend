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
        return { msg: "Canciones obtenidas con éxito", statusCode: 200, data: canciones };
    } catch (error) {
        console.error(error);
        return { msg: "Error al obtener las canciones", statusCode: 400 };
    }
};