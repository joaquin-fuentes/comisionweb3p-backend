import jwt from "jsonwebtoken";

export function validarAutenticacion(req, res, next) {
  try {
    const rawToken = req.headers.authorization;
    if (!rawToken?.startsWith("Bearer"))
      res.status(401).json({ msg: "Formato de Token inválido" });
    const token = rawToken?.split(" ")[1];
    const usuario = jwt.verify(token, process.env.SECRET_KEY);
    console.log(usuario);
    if (usuario.rolUsuario !== "admin") {
      res.status(403).json({ msg: "Rol de usuario NO AUTORIZADO" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ msg: "Error de autorizacion" });
  }
}
