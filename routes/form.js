'use strict'

const express = require('express')
const formCtrl = require('../controllers/form')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
  })
api.get('/form', formCtrl.getForm)
api.put('/form/:formId', formCtrl.updateForm)
module.exports = api