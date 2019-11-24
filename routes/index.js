'use strict'
const express = require('express')
const tarjetaCtrl = require('../controllers/tarjeta')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/tarjeta', tarjetaCtrl.getTarjetas)
api.post('/tarjeta', tarjetaCtrl.saveTarjeta)
api.put('/tarjeta/:tarjetaId', tarjetaCtrl.updateTarjeta)

module.exports = api
