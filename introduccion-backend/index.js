const express = require("express");

const app = express();
app.use(express.json());

let usuarios = [
  {
    id: 1,
    nombre: "Joaquín",
    apellido: "Fuentes",
    email: "joaquin.fuentes@example.com",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    email: "maria.gomez@example.com",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    email: "carlos.lopez@example.com",
  },
];

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ mensaje: "Método GET desde el backend usando nodemon" });
});

// OBTENER USUARIOS
app.get("/usuarios", (req, res) => {
  res.status(200).json({ usuarios });
});

// OBTENER 1 SOLO USUARIO POR ID
app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find((usuario) => usuario.id === Number(id));
  if (!usuario) return res.status(404).json({ msg: "No encontrado" });
  res.status(200).json({ usuario });

  // usuario
  // ? res.status(200).json({ usuario })
  // : res.status(404).json({ msg: "Usuario no encontrado" });
});

function nuevoId() {
  const elMasAlto = usuarios.reduce((max, usuario) => {
    return usuario.id > max ? usuario.id : max;
  }, 0);
  return elMasAlto + 1;
}
// CREAR UN USUARIO
app.post("/usuarios", (req, res) => {
  console.log(req.body);
  const { nombre, apellido, email } = req.body;
  if (!nombre || !apellido || !email)
    return res
      .status(400)
      .json({ mensaje: "Debe completar todos los campos obligatorios" });
  const nuevoUsuario = {
    id: nuevoId(),
    nombre,
    apellido,
    email,
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json({ nuevoUsuario });
});

// EDITAR UN USUARIO
app.put("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, email } = req.body;
  if (!nombre || !apellido || !email)
    return res
      .status(400)
      .json({ mensaje: "Debe completar todos los campos obligatorios" });

  const indiceUsuario = usuarios.findIndex(
    (usuario) => usuario.id === Number(id)
  );
  if (indiceUsuario === -1)
    return res.status(404).json({ mensaje: "Usuario no encontrado" });

  usuarios[indiceUsuario] = {
    ...usuarios[indiceUsuario],
    nombre,
    apellido,
    email,
  };
  const usuarioActualizado = usuarios[indiceUsuario];
  res.status(200).json({ usuarioActualizado });
});

// ELIMINAR UN USUARIO
app.delete("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);
  usuarios = usuarios.filter((usuario) => usuario.id !== id);
  res.status(200).json({ usuarios });
});
