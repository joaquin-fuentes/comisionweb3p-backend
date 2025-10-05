import { Router } from "express";
import {
  actualizarCancionController,
  crearCancionController,
  eliminarCancionController,
  obtenerCancionesController,
  obtenerCancionesPorIdController,
} from "../controllers/canciones.controller.js";

const router = Router();

router.post("/", crearCancionController);

router.get("/", obtenerCancionesController);

router.get("/:id", obtenerCancionesPorIdController);

router.patch("/:id", actualizarCancionController);

router.delete("/:id", eliminarCancionController);

export default router;
