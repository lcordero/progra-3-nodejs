'Use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema({
  name: String,
  address:String,
  phone:{ type: Number, default: 0 }

})

module.exports = mongoose.model('Usuario', UsuarioSchema)