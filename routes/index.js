'use strict'
const express = require('express')
const tarjetasCtrl = requiere('../controllers/tarjetas')
const api = express.Router()

api.get('/tarjetas', tarjetasCtrl.getTarjetas)
api.post('/tarjetas', tarjetasCtrl.saveTarjetas)

module.exports = api