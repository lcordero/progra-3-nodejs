'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    nombre: "rojo",
    color: 0,
    
})
const ProductSchema = Schema({
    nombre: "verde",
    color: 0,
    
})
const ProductSchema = Schema({
    nombre: "amarillo",
    color: 0,
    
})

module.exports = mongoose.model('Tarjeta', TarjetaSchema)