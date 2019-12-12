

const express = require('express')
const datosCtrl = require('../controllers/datos')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()
const formCtrl = require('../controllers/form.js')


api.get('/form',formCtrl.getform)
api.put('/form', formCtrl.updateform)

api.get('/datos', datosCtrl.getDatos)
api.get('/datos/:datosId', datosCtrl.getDatos)
api.post('/datos', datosCtrl.saveDatos)
api.put('/datos/:datosId', datosCtrl.updateDatos)
api.delete('/datos/:datosId', datosCtrl.deleteDatos)
// api.get('/datos', auth, datosCtrl.getDatoss)
// api.get('/datos/:datosId', datosCtrl.getDatos)
// api.post('/datos', auth, datosCtrl.saveDatos)
// api.put('/datos/:datosId', auth, datosCtrl.updateDatos)
// api.delete('/datos/:datosId', auth, datosCtrl.deleteDatos)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api