const express = require('express')
const menuCtrl = require('../controllers/menu1')

const api = express.Router()

api.get('/menu', menuCtrl.getMenu)
api.post('/menu', menuCtrl.saveOrden)
api.post('/menu', menuCtrl.saveMenu)





module.exports = api