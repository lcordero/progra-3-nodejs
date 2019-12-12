'use strict'

const express = require('express')
const customerCtrl = require('../controllers/customer')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/customer', customerCtrl.getCustomer)
api.get('/customer/:customerId', customerCtrl.getCustomer)
api.post('/customer', customerCtrl.saveCustomer)
api.put('/customer/:customerId', customerCtrl.updateCustomer)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})


api.get('/customer', customerCtrl.getCustomer)
api.put('/customer/:customerId', customerCtrl.updateCustomer)


api.get('/form', formCtrl.getForm)
api.put('/form/:formId', formCtrl.updateForm)
module.exports = api
