'use strict'

const express = require('express')
const zapatoCtrl = require('../controllers/zapato')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/zapato', zapatoCtrl.getZapatos)
api.get('/zapato/:zapatoId', zapatoCtrl.getZapato)
api.post('/zapato', zapatoCtrl.saveZapato)
api.put('/zapato/:zapatoId', zapatoCtrl.updateZapato)
api.delete('/zapato/:zapatoId', zapatoCtrl.deleteZapato)
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