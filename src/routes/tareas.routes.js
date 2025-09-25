import { Router } from "express";
import { obtenerTareasController } from "../controllers/tareas.controller.js";

const router = Router();

router.get("/", obtenerTareasController);

export default router;
