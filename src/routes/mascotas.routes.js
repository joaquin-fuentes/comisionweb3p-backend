import { Router } from "express";
import { obtenerMascotasController } from "../controllers/mascotas.controllers.js";

const router = Router();

// OBTENER mascotaS
router.get("/", obtenerMascotasController);

export default router;
