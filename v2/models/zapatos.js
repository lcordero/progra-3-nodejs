'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ZapatoSchema = Schema({
  name: String,
  tamano:{type:Number,default:0},
  description: String
})
module.exports = mongoose.model('Zapato', ZapatosSchema)