import { Router } from "express";
import {
  crearMascotaController,
  editarMascotaController,
  eliminarMascotaController,
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

// Editar una mascota
router.put("/:id", editarMascotaController);

// Eliminar una mascota
router.delete("/:id", eliminarMascotaController);

export default router;
