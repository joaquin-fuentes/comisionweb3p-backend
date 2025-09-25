import { Router } from "express";
import {
  obtenerTareasController,
  obtenerTareasPorIdController,
} from "../controllers/tareas.controller.js";

const router = Router();

router.get("/", obtenerTareasController);

router.get("/:id", obtenerTareasPorIdController);

export default router;
