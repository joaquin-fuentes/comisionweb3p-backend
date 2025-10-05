import {
  actualizarCancionService,
  crearCancionService,
  eliminarCancionService,
  obtenerCancionesPorIdservice,
  obtenerCancionesService,
} from "../services/canciones.service.js";

export const crearCancionController = async (req, res) => {
  const nuevaCancion = req.body;
  const { msg, statusCode } = await crearCancionService(nuevaCancion);
  res.status(statusCode).json({ msg });
};

export const obtenerCancionesController = async (req, res) => {
  const { msg, statusCode, data } = await obtenerCancionesService();
  res.status(statusCode).json({ msg, data });
};

export const obtenerCancionesPorIdController = async (req, res) => {
  const id = req.params.id;
  const { msg, statusCode, data } = await obtenerCancionesPorIdservice(id);
  res.status(statusCode).json({ msg, data });
};

export const actualizarCancionController = async (req, res) => {
  const id = req.params.id;
  const { msg, statusCode, data } = await actualizarCancionService(id, req.body);
  res.status(statusCode).json({ msg, data });
};

export const eliminarCancionController = async (req, res) => {
  const id = req.params.id;
  const { msg, statusCode } = await eliminarCancionService(id);
  res.status(statusCode).json({ msg });
};