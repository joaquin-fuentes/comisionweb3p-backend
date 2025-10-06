import { PeliculaModel } from "../models/pelicula.model.js";
export const idUnico = () => {
  const elMasAlto = peliculas.reduce(
    (max, pelicula) => (pelicula.id > max ? pelicula.id : max),
    0
  );
  return elMasAlto + 1;
};
export const obtenerPeliculasService = async () => {
  const peliculaDB = await PeliculaModel.find();
  return peliculaDB;
};
export const obtenerPeliculasPorIdService = async (id) => {
  const peliculaEncontrada = await PeliculaModel.findById(id);
  return peliculaEncontrada;
};
export const crearPeliculaService = async (NuevaPelicula) => {
  try {
    const NuevaPeliculaDB = new PeliculaModel(NuevaPelicula);
    await NuevaPeliculaDB.save();
    return { msg: "pelicula creada", statusCode: 201 };
  } catch (error) {
    console.error(error);
    return { msg: "error al crear pelicula", statusCode: 400 };
  }
};
export const validarCamposPeliculasService = (titulo, descripcion, fechaDeLanzamiento) => {
  return !titulo || !descripcion || !fechaDeLanzamiento;
};
export const editarPeliculaService = async (id, body) => {
  try {
    const peliculaEditada = await PeliculaModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    return { peliculaEditada, msg: "pelicula actualizada", statusCode: 200 };
  } catch (error) {
    console.log(error);
    return { msg: "error al actualizar la pelicula", statusCode: 400 };
  }
};
export const eliminarPeliculaService = async (id) => {
  const peliculaEliminada = await PeliculaModel.findByIdAndDelete(id);
  return peliculaEliminada
};
