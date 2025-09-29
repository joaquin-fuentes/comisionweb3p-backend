import {
  actualizarMascotaService,
  crearMascotaService,
  eliminarMascotaService,
  nuevoIdMascota,
  obtenerIndiceMascota,
  obtenerMascotaPorIdService,
  obtenerMascotasService,
  validarCamposMascotaService,
} from "../services/mascotas.services.js";

export const obtenerMascotasController = (req, res) => {
  const mascotas = obtenerMascotasService();
  res.status(200).json({ mascotas });
};

export const obtenerMascotaPorIdController = (req, res) => {
  const id = req.params.id;
  const mascota = obtenerMascotaPorIdService(id);
  if (!mascota) return res.status(404).json({ msg: "Mascota no encontrada" });
  res.status(200).json({ mascota });
};

export const crearMascotaController = (req, res) => {
  const {
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado,
  } = req.body;

  const error = validarCamposMascotaService(
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado
  );

  if (error)
    return res.status(400).json({
      mensaje: error,
    });

  const nuevaMascota = {
    id: nuevoIdMascota(),
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado,
  };

  const { msg, statusCode } = crearMascotaService(nuevaMascota);
  if (statusCode === 201) {
    res.status(statusCode).json({ nuevaMascota, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const editarMascotaController = (req, res) => {
  const id = req.params.id;
  const {
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado,
  } = req.body;

  const error = validarCamposMascotaService(
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado
  );

  if (error)
    return res.status(400).json({
      mensaje: error,
    });

  const indiceMascota = obtenerIndiceMascota(id);
  if (indiceMascota === -1)
    return res.status(404).json({ mensaje: "Mascota no encontrada" });

  const { mascotaActualizada, msg, statusCode } = actualizarMascotaService(
    indiceMascota,
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado
  );

  if (statusCode === 200) {
    res.status(statusCode).json({ mascotaActualizada, msg });
  } else {
    res.status(statusCode).json({ msg });
  }
};

export const eliminarMascotaController = (req, res) => {
  const id = Number(req.params.id);
  const eliminado = eliminarMascotaService(id);

  if (!eliminado) {
    return res.status(404).json({ mensaje: "Mascota no encontrada" });
  }

  res.status(204).end(); 
};
