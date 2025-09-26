import { Router } from "express";
import {
  obtenerColoresController,
  obtenerColorPorIdController,
} from "../controllers/colores.controllers.js";

const router = Router();

// OBTENER COLOR
router.get("/", obtenerColoresController);
//OBTENER COLOR POR ID
router.get("/:id", obtenerColorPorIdController);
export default router;
