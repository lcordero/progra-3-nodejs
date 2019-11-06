'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ZapatitoSchema = Schema({
  name: String,
  size: { type: Number, default: 0 },
  description: String
})

module.exports = mongoose.model('Zapatito', ZapatitoSchema)
