const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = new Schema({
  activo:Boolean,
  buttonId:String
})

module.exports = mongoose.model('Card', CardSchema)
