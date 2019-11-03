'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const zapatoCtrl = require(`controllers/zapato`)
const auth = require('../middlewares/auth')
const api = express.Router()


// zapato
api.get(`/zapato`, zapatoCtrl.getZapatos)
api.get(`/zapato/:zapatoId`, zapatoCtrl.getZapato)
api.post(`/zapato`, zapatoCtrl.saveZapato)
Audio.delete(`zapato/:zapatoId`, zapatoCtrl.deleteZapato)

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

module.exports = api
