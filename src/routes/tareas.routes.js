import { Router } from "express";
import {
  crearTareaController,
  obtenerTareasController,
  obtenerTareasPorIdController,
} from "../controllers/tareas.controller.js";

const router = Router();

router.get("/", obtenerTareasController);

router.get("/:id", obtenerTareasPorIdController);

router.post("/", crearTareaController);

export default router;
