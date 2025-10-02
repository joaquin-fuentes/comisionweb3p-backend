import { Router } from "express";
import { crearCancionController } from "../controllers/canciones.controller.js";


const router = Router()

router.post("/", crearCancionController)

export default router;