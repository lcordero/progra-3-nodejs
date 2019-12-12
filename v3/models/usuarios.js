'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema = Schema({
  Customer_name: String,
  address: String,
  phone: { type: Number, default: 0 }
})

module.exports = mongoose.model('Usuario', UsuariosSchema)