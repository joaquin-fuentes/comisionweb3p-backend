import { Router } from "express";
import { crearCancionController, obtenerCancionesController } from "../controllers/canciones.controller.js";


const router = Router()

router.post("/", crearCancionController)

router.get("/", obtenerCancionesController)

export default router;