'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const tarjetaCtrl = require('../controllers/tarjeta')
<<<<<<< HEAD
const NuevoMenuCtrl = require('../controllers/NuevoMenu')
=======
const formCtrl = require('../controllers/form')
>>>>>>> 2e4ed2db4afca1d42c8e160a3cffb918ad7d79e4
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
// api.get('/product', auth, productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', auth, productCtrl.saveProduct)
// api.put('/product/:productId', auth, productCtrl.updateProduct)
// api.delete('/product/:productId', auth, productCtrl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

// rutas de agregar NuevoMenu
api.get('/menu', NuevoMenuCtrl.getNuevoMenus)
api.get('/menu/:NuevoMenuId', NuevoMenuCtrl.getNuevoMenu)
api.post('/menu', NuevoMenuCtrl.saveNuevoMenu)
api.put('/menu/:NuevoMenuId', NuevoMenuCtrl.updateNuevoMenu)
api.delete('/menu/:NuevoMenuId', NuevoMenuCtrl.deleteNuevoMenu)

api.get('/tarjeta', tarjetaCtrl.getTarjetas)
api.put('/tarjeta/:tarjetaId', tarjetaCtrl.updateTarjeta)


api.get('/form', formCtrl.getForm)
api.put('/form/:formId', formCtrl.updateForm)
module.exports = api
