import { validationResult } from "express-validator";

// manejador de errores
export const handleValidationErrors = (req, res, next) => {
  // 📥 Obtiene los errores que generaron los middlewares anteriores (body, param, etc.)
  const errors = validationResult(req);
  //  si existen errores devolver repsuesta de error al front y terminar la ejecucion
  if (!errors.isEmpty()) {
    console.log(errors);
    const formattedErrors = errors.array().map((err) => ({
      field: err.path || err.param, // el campo que falló
      message: err.msg, // el mensaje de error
      value: err.value, // el valor recibido
    }));
    // Devolver error
    return res.status(400).json({
      success: false,
      message: "Errores de validación",
      errors: formattedErrors,
      totalErrors: formattedErrors.length,
    });
  }
  //   si no hay errores dejo que pase la funcion siguiente
  next();
};
