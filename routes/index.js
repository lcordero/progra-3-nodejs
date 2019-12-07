"use strict"
const express = require("express")
const datosCrtl = require("../controller/datos")
const api = express.Router()

api.get("/Datos",datosCrtl.getDatos)
api.put("/Datos",datosCrtl.updateDatos)

module.exports = api