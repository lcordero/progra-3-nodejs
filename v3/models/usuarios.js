'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UsuarioSchema = Schema ({
    customername: String,
    address: String,
    phone: Number,
})

module.exports = mongoose.model('Usuario', UsuarioSchema)