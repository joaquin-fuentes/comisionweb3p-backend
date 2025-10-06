import {
  obtenerPeliculasService,
  obtenerPeliculasPorIdService,
  crearPeliculaService,
  editarPeliculaService,
  eliminarPeliculaService,
  validarCamposPeliculasService,
} from "../services/peliculas.service.js";

export const obtenerPeliculasController = async (req, res) => {
  try {
    const peliculas = await obtenerPeliculasService();
    res.status(200).json({ success: true, data: peliculas });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        msg: "Error al obtener películas",
        error: error.message,
      });
  }
};

export const obtenerPeliculaPorIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const pelicula = await obtenerPeliculasPorIdService(id);

    if (!pelicula) {
      return res
        .status(404)
        .json({ success: false, msg: "Película no encontrada" });
    }

    res.status(200).json({ success: true, data: pelicula });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        msg: "Error al obtener la película",
        error: error.message,
      });
  }
};

export const crearPeliculaController = async (req, res) => {
  try {
    const { titulo, descripcion, fechaDeLanzamiento, director, duracion } =
      req.body;

    const esInvalida = validarCamposPeliculasService(
      titulo,
      descripcion,
      fechaDeLanzamiento,
      director,
      duracion
    );
    if (esInvalida) {
      return res
        .status(400)
        .json({ success: false, msg: "Completar todos los campos" });
    }

    const { pelicula, msg, statusCode } = await crearPeliculaService(req.body);

    res.status(statusCode).json({
      success: statusCode === 201,
      data: pelicula,
      msg,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        msg: "Error al crear la película",
        error: error.message,
      });
  }
};

export const editarPeliculaController = async (req, res) => {
  try {
    const id = req.params.id;
    const { msg, statusCode, pelicula } = await editarPeliculaService(
      id,
      req.body
    );

    if (statusCode === 200) {
      res.status(200).json({ success: true, data: pelicula, msg });
    } else {
      res.status(statusCode).json({ success: false, msg });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        msg: "Error al editar la película",
        error: error.message,
      });
  }
};

export const eliminarPeliculaController = async (req, res) => {
  try {
    const id = req.params.id;
    const peliculaEliminada = await eliminarPeliculaService(id);

    if (!peliculaEliminada) {
      return res
        .status(404)
        .json({ success: false, msg: "Película no encontrada" });
    }

    res
      .status(200)
      .json({
        success: true,
        data: peliculaEliminada,
        msg: "Película eliminada",
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        msg: "Error al eliminar la película",
        error: error.message,
      });
  }
};
