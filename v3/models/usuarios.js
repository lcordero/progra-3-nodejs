'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema = Schema({
  customername: String,
  anddress: String,
  phone: String
})

module.exports = mongoose.model('Usuarios', UsuariosSchema)