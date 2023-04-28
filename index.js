const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 3977;
const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.use(express.static("public"));

// Handlebars
app.set("view engine", "hbs");
// Handlebards Partials
hbs.registerPartials(__dirname + "/views/partials", (error) => {
  error && console.log(error);
});

// Controlador es el callback de la petición get.
// Podemos enviar argumentos desde el controlador a la vista con un objeto literal
// n el método render, el segundo argumento acepta un objeto literal cuyas claves podrán
// ser llamadas en el archivo home.hbs de la siguiente manera : {{ title }} Para renderizar el valor de la clave title.
app.get("/", (req, res) => {
  res.status(200).render("home", {
    name: "Pool Llerena",
    title: "Curso de nodeJS",
  });
});

app.get("/promociones", (req, res) => {
  res.status(200).render("promociones", {
    title: "Handlebars",
  });
});

app.get("/carta", (req, res) => {
  res.status(200).render("carta", {
    title: "La carta con NodeJS/HandleBars",
  });
});

app.get("/blog", (req, res) => {
  res.status(200).render("blog", {
    title: "Blog con NodeJS/HandleBars",
  });
});

app.get("/nosotros", (req, res) => {
  res.status(200).render("nosotros", {
    title: "Nosotros con NodeJS/HandleBars",
  });
});

app.get("/contacto", (req, res) => {
  res.status(200).render("contacto", {
    title: "Contacto con NodeJS/HandleBars",
  });
});

app.listen(PORT, () => {
  console.log("Servidor en el puerto", PORT);
});
