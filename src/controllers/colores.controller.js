import {
  actualizarColorService,
  crearColorService,
  eliminarColorService,
  generarIdUnico,
  ObtenerColoresIdService,
  obtenerColoresService,
  validarCamposColorService,
} from "../services/colores.service.js";

export const obtenerColoresController = async (req, res) => {
  const colores = await obtenerColoresService();
  res.status(200).json({ colores });
};
export const obtenerColorPorIdController = async (req, res) => {
  const { id } = req.params;
  const color = await ObtenerColoresIdService(id);
  if (!color) return res.status(404).json({ msg: "No encontrado" });
  res.status(200).json({ color });
};
export const crearColorController = async (req, res) => {
  const { statusCode, msg } = await crearColorService(req.body);
  return res.status(statusCode).json({ msg });
};
export const editarColorController = async (req, res) => {
  const id = req.params.id;
  const { body } = req.body;

  const colorActualizado = await actualizarColorService(id, body);
  res.status(200).json({ colorActualizado });
};
export const eliminarColorController = (req, res) => {
  const id = req.params.id;
  const color = eliminarColorService(id);
  res.status(200).json();
};
