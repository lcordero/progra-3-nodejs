'use strict'

const express = require('express')
const productoCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/producto', productoCtrl.getProducts)
api.get('/producto/:productoID', productoCtrl.getProduct)
api.post('/producto', productoCtrl.saveProduct)
api.put('/producto/:productoID', productoCtrl.updateProduct)
// api.delete('/producto/:productID', productoCtrl.deleteProduct)
// api.get('/product', auth, productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', auth, productCtrl.saveProduct)
// api.put('/product/:productId', auth, productCtrl.updateProduct)
// api.delete('/product/:productId', auth, productCtrl.deleteProduct)
// api.post('/signup', userCtrl.signUp)
// api.post('/signin', userCtrl.signIn)
// api.get('/private', auth, (req, res) => {
  // res.status(200).send({ message: 'Tienes acceso' })
// })

module.exports = api
