const { Router } = require("express");
const { getCountries } = require("../handlers/countrieHandler/getCountrie.js");

const countrieRouter = Router();

//Rutas
countrieRouter.get("/countries", getCountries);

module.exports = countrieRouter;
