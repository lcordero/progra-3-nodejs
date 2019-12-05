'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormSchema = Schema({
  name: String,
  lastname: String,
  country: String
})

module.exports = mongoose.model('Form', FormSchema)
