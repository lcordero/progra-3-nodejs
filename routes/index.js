'use strict'
const express = require('express')
const tarjetaCtrl = require('../controllers/tarjetas')
const api = express.Router()

api.get('/tarjeta', tarjetaCtrl.getTarjeta)
api.post('/tarjeta', tarjetaCtrl.saveTarjeta)
//api.put('/tarjeta', tarjetaCtrl.updateTarjeta)

module.exports = api