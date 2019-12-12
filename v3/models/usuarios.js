'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema = Schema({
  customername: String,
  anddress: String,
  phone: { type: Number, default: 0 },
})

module.exports = mongoose.model('Usuarios', UsuariosSchema)