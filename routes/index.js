const express = require('express')
const formularioCtrl = require('../controller/formulario')

const api = express.Router()

api.get('/formulario', formularioCtrl.getFormulario)
api.get('/formulario/:formulariotId', formularioCtrl.getFormulario)
api.post('/formulario', formularioCtrl.saveFormulario)
api.put('/product/:formulario', formularioCtrl.updateFormulario)
api.delete('/formulario/:formularioId', formularioCtrl.deleteFormulario)

//  res.status(200).send({ message: 'Tienes acceso' })
//})

module.exports = api