'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TarjetaSchema = Schema({
    nombre: String,
    color: {type: Boolean, default: 0},
    
})

module.exports = mongoose.model('Tarjeta', TarjetaSchema)