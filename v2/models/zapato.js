'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ZapatoSchema = Schema({
  nombre: String,
  tamaño: {type: Number, default:  0},
  descripcion: String
})

module.exports = mongoose.model('Zapato', ZapatoSchema)