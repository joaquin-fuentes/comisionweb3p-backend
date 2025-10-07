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

router.get("/", obtenerTareasController);

router.get("/:id", obtenerTareasPorIdController);

router.post("/", crearTareaController);

router.put("/:id", editarTareaController);

router.delete("/:id", eliminarTareaController);

export default router;
