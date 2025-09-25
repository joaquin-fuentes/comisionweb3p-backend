import { obtenerTareasService } from "../services/tareas.service.js"

export const obtenerTareasController = (req, res)=>{
    const tareas = obtenerTareasService()
    res.status(200).json({tareas})
}

export const obtenerTareasPorIdController = (req,res)=>{
    const id = req.params.id
    
}