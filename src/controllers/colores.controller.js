import {
  actualizarColorService,
  crearColorService,
  eliminarColorService,
  generarIdUnico,
  ObtenerColoresIdService,
  obtenerColoresService,
  validarCamposColorService,
} from "../services/colores.service.js";

export const obtenerColoresController = (req, res) => {
  const colores = obtenerColoresService();
  res.status(200).json({ colores });
};
export const obtenerColorPorIdController = (req, res) => {
  const id = req.params.id;
  const color = ObtenerColoresIdService(id);
  if (!color) return res.status(404).json({ msg: "No encontrado" });
  res.status(200).json({ color });
};
export const crearColorController = async (req, res) => {
  const { statusCode, msg } = await crearColorService(req.body);
  return res.status(statusCode).json({ msg });
};
export const editarColorController = (req, res) => {
  const id = req.params.id;
  const { nombre, codigoHex } = req.body;
  const camposValidos = validarCamposColorService(nombre, codigoHex);
  if (camposValidos) {
    return res.status(400).json({ msg: "Campos inválidos" });
  }
  const colorActualizado = actualizarColorService(id, nombre, codigoHex);
  res.status(200).json({ colorActualizado });
};
export const eliminarColorController = (req, res) => {
  const id = req.params.id;
  const color = eliminarColorService(id);
  res.status(200).json({ color });
};
