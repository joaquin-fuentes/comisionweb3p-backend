import { Router } from "express";
import {
  obtenerPeliculasController,
  obtenerPeliculaPorIdController,
  crearPeliculaController,
  editarPeliculaController,
  eliminarPeliculaController,
} from "../controllers/peliculas.controller.js";

const router = Router();
router.get("/", obtenerPeliculasController);

router.get("/:id", obtenerPeliculaPorIdController);

router.post("/", crearPeliculaController);

router.put("/:id", editarPeliculaController);

router.delete("/:id", eliminarPeliculaController);

export default router;
