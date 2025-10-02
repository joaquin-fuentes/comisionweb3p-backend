import { crearCancionService } from "../services/canciones.service.js";

export const crearCancionController = async (req, res) => {
    const nuevaCancion = req.body;
    const { msg, statusCode } = await crearCancionService(nuevaCancion);
    res.status(statusCode).json({ msg });
}