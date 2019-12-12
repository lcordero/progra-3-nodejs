'use strict'

const express = require('express')
// const productCtrl = require('../controllers/product')
// const userCtrl = require('../controllers/user')
const usuarioCtrl = require('../controllers/usuarios')
// const auth = require('../middlewares/auth')
const api = express.Router()

// api.get('/product', productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', productCtrl.saveProduct)
// api.put('/product/:productId', productCtrl.updateProduct)
// api.delete('/product/:productId', productCtrl.deleteProduct)
api.get('/usuarios', usuarioCtrl.getUsuarios)
api.get('/usuarios/', usuarioCtrl.getUsuario)
api.put('/usuarios/:usuarioId', usuarioCtrl.updateUsuario)
api.delete('/product/:productId', usuarioCtrl.deleteUsuario)
// api.post('/signup', userCtrl.signUp)
// api.post('/signin', userCtrl.signIn)
// api.get('/private', auth, (req, res) => {
//   res.status(200).send({ message: 'Tienes acceso' })
// })

module.exports = api
