import { Router } from "express";
import { obtenerColoresController } from "../controllers/colores.controllers.js";

const router = Router();

// OBTENER COLOR
router.get("/", obtenerColoresController);

export default router;
