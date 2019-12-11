"use strict"
const express = require("express")
const datosCrtl = require("../controller/datos")
const formCtrl = require('../controller/form')
const tarjetaCrtl = require("../controller/tarjeta")
const api = express.Router()

api.get("/Datos",datosCrtl.getDatos)
api.put("/Datos",datosCrtl.updateDatos)


api.get("/tarjeta",tarjetaCrtl.getTarjetas)
api.put("/tarjeta/:tarjetaId",tarjetaCrtl.updateTarjeta)

api.get('/form', formCtrl.getForm)
api.put('/form/:formId', formCtrl.updateForm)
module.exports = api