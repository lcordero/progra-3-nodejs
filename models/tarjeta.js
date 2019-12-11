'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TarjetaSchema = Schema({
  name: String,
  status: { type: Number, default: 0 }
})


module.exports = mongoose.model('Tarjeta', TarjetaSchema)