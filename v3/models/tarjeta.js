'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TarjetaSchema = Schema({
  name: String,
  status: { type: Number, default: 0 }
})
// name: Color de la tarjeta
// status: 
//     0 = Inactivo(Color Blanco)
//     1 = Activo(Color de la tarjeta: "name")

module.exports = mongoose.model('Tarjeta', TarjetaSchema)
