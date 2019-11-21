const express = require('express')
const cardCtrl = require('../controllers/tarjeta')
// const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/cards', cardCtrl.getCards)
api.post('/card', cardCtrl.saveCard)
api.put('/card/:buttonId', cardCtrl.updateCard)

module.exports = api