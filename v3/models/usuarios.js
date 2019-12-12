'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
  id: {type: Number, default: 0},  
  name: String,
  address: String,
  phone: { type: Number}
})

module.exports = mongoose.model('Usuario', UsuarioSchema)