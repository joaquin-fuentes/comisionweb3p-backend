import {
  crearMascotaService,
  nuevoIdMascota,
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
  if (!mascota) return res.status(404).json({ msg: "No encontrado" });
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
    vacunado
  } = req.body;

  const camposValidos = validarCamposMascotaService(
    nombre,
    especie,
    raza,
    edad,
    nombreDuenio,
    telefonoDuenio,
    vacunado
  );

  if (camposValidos)
    return res.status(400).json({
      mensaje: "Es requerido informar el nombre y la especie de la mascota",
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
