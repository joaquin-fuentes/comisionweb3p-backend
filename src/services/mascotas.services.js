import { MascotaModel } from "../models/mascota.model.js";

export const obtenerMascotasService = async () => {
  try {
    const mascotas = await MascotaModel.find();
    return mascotas;
  } catch (error) {
    throw new Error("error al obtener las mascotas");
  }
};

export const obtenerMascotaPorIdService = async (id) => {
  const mascotaEncontrado = await MascotaModel.findById(id);
  return mascotaEncontrado;
};

export const crearMascotaService = async (body) => {
  try {
    const nuevaMascotaDB = new MascotaModel(body);
    await nuevaMascotaDB.save();
    return { msg: "mascota creada con exito", statusCode: 201 };
  } catch (error) {
    return {
      msg: `Error al crear mascota: ${error?.message || "Error desconocido"}`,
      statusCode: 400,
    };
  }
};

export const actualizarMascotaService = async (id, body) => {
  try {
    const mascotaActualizadaBD = await MascotaModel.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );
    return {
      mascotaActualizadaBD,
      msg: "Mascota actualizada con exito",
      statusCode: 200,
    };
  } catch (error) {
    return {
      msg: `Error al actualizar mascota: ${
        error?.message || "Error desconocido"
      }`,
      statusCode: 400,
    };
  }
};

export const eliminarMascotaService = async (id) => {
  const mascotaEliminada = await MascotaModel.findByIdAndDelete(id);
  return mascotaEliminada;
};
