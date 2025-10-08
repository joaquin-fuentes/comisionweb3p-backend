import jwt from "jsonwebtoken";

export function validarAutenticacion(req, res, next) {
  try {
    const rawToken = req.headers.authorization;
    if (!rawToken?.startsWith("Bearer"))
      res.status(401).json({ msg: "Formato de Token inválido" });
    const token = rawToken?.split(" ")[1];
    const usuario = jwt.verify(token, process.env.SECRET_KEY);
    if (!usuario) {
      res.status(403).json({ msg: "Usuario no autorizado" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ msg: "Error de autorizacion" });
  }
}
