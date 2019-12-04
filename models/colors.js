'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = Schema ({
    name: String,
    status: {type:Number, default:0}
})
module.exports = mongoose.model('Colors', cardSchema)