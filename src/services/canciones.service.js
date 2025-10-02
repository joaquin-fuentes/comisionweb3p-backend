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