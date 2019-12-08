'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MacSchema = Schema({
    combo: String,
    bebida: String,
    acompanamiento: String
})

module.exports = mongoose.model('NuevoMenu', MacSchema)