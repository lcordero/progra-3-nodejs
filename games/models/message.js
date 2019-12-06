'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MsgSchema = Schema({
    content: String
})

module.exports = mongoose.model('Msg', MsgSchema)
