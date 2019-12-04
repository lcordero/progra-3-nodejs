'use strict'

const express = require('express')
const colorsCtrl = require('../controllers/colors')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/color', colorsCtrl.getcolors)
api.get('/color/:colorsID', colorsCtrl.getcolor)
api.post('/color', colorsCtrl.saveColors)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api