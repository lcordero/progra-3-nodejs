const express = require('express')
const usuarioCtrl = require('../controllers/user')
const tarjetaCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/usuarios', usuarioCtrl.getUsuarios)
api.get('/usuarios/:usuarioId', usuarioCtrl.getUsuario)
api.put('/usuarios/:usuarioId', usuarioCtrl.updateUsuario)
api.delete('/product/:productId', usuarioCtrl.deleteUsuario)

module.exports = api




