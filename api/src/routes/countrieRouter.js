const { Router } = require("express");
const { getCountries,getCountrieDetail } = require("../handlers/countrieHandler/getCountrie.js");

const countrieRouter = Router();

//Rutas
countrieRouter.get("/countries", getCountries);
countrieRouter.get("/getCountrieDetail/:tag", getCountrieDetail);

module.exports = countrieRouter;
