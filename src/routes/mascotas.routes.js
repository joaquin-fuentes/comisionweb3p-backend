import { Router } from "express";
import {
  crearMascotaController,
  obtenerMascotaPorIdController,
  obtenerMascotasController,
} from "../controllers/mascotas.controllers.js";

const router = Router();

// Obtener mascotas
router.get("/", obtenerMascotasController);

// Obtener una sola mascota por ID
router.get("/:id", obtenerMascotaPorIdController);

// Crear una mascota
router.post("/", crearMascotaController);

export default router;
