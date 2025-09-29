import { Router } from "express";
import {
  crearColorController,
  obtenerColoresController,
  obtenerColorPorIdController,
} from "../controllers/colores.controllers.js";

const router = Router();

// OBTENER COLOR
router.get("/", obtenerColoresController);
//OBTENER COLOR POR ID
router.get("/:id", obtenerColorPorIdController);
//  CREAR COLOR
router.post("/", crearColorController);
export default router;
