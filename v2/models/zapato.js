'use strinct'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const zapatoSchema = Schema({
    name: String,
    tamano:{type:Number, default: 0},
    description: String
  })

module.exports = mongoose.model('zapato', zapatoSchema)