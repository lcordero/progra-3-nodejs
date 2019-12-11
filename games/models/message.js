'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MsgSchema = Schema({
    user: String,
    content: String
})

module.exports = mongoose.model('Msg', MsgSchema)
