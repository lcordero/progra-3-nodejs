'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  nombre: String,
  Apellido: String,
  Pais: String

})

module.exports = mongoose.model('Product', ProductSchema)
