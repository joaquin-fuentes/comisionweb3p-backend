import {
  actualizarMascotaService,
  crearMascotaService,
  eliminarMascotaService,
  obtenerMascotaPorIdService,
  obtenerMascotasService,
} from "../services/mascotas.services.js";

export const obtenerMascotasController = async (req, res) => {
  const mascotas = await obtenerMascotasService();
  res.status(200).json({ mascotas });
};

export const obtenerMascotaPorIdController = async (req, res) => {
  const id = req.params.id;
  const mascota = await obtenerMascotaPorIdService(id);
  if (!mascota) return res.status(404).json({ msg: "Mascota no encontrada" });
  res.status(200).json({ mascota });
};

export const crearMascotaController = async (req, res) => {
  const { msg, statusCode } = await crearMascotaService(req.body);
  const nuevaMascota = req.body;

  if (statusCode === 201) {
    res.status(statusCode).json({ nuevaMascota, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const editarMascotaController = async (req, res) => {
  const id = req.params.id;

  const mascotaActualizada = await actualizarMascotaService(id, req.body);
  const { msg, statusCode } = mascotaActualizada;
  if (statusCode === 200) {
    res.status(statusCode).json({ mascotaActualizada, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const eliminarMascotaController = async (req, res) => {
  const id = req.params.id;
  const mascotaEliminada = await eliminarMascotaService(id);
  if (!mascotaEliminada)
    return res.status(404).json({ msg: "Mascota no encontrada" });
  return res.status(200).json({ mascotaEliminada, msg: "Eliminacion exitosa" });
};
