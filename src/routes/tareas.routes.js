import { Router } from "express";
import {
  crearTareaController,
  editarTareaController,
  obtenerTareasController,
  obtenerTareasPorIdController,
} from "../controllers/tareas.controller.js";

const router = Router();

router.get("/", obtenerTareasController);

router.get("/:id", obtenerTareasPorIdController);

router.post("/", crearTareaController);

router.put("/:id", editarTareaController);

export default router;
