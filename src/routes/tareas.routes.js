import { Router } from "express";
import {
  crearTareaController,
  editarTareaController,
  eliminarTareaController,
  obtenerTareasController,
  obtenerTareasPorIdController,
} from "../controllers/tareas.controller.js";
import { validarAutenticacion } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", validarAutenticacion, obtenerTareasController);

router.get("/:id", validarAutenticacion, obtenerTareasPorIdController);

router.post("/", validarAutenticacion, crearTareaController);

router.put("/:id", validarAutenticacion, editarTareaController);

router.delete("/:id", validarAutenticacion, eliminarTareaController);

export default router;
