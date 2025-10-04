import { crearCancionService, obtenerCancionesService } from "../services/canciones.service.js";

export const crearCancionController = async (req, res) => {
    const nuevaCancion = req.body;
    const { msg, statusCode } = await crearCancionService(nuevaCancion);
    res.status(statusCode).json({ msg });
}

export const obtenerCancionesController = async (req, res) => {
   const { msg, statusCode, data } = await obtenerCancionesService();
   res.status(statusCode).json({ msg, data });
}