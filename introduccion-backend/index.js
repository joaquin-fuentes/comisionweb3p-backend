const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Método GET desde el backend" });
});
