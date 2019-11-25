const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormularioSchema = Schema({
  name: String,
  lastname: String,
  country: String,
  
  description: String
})

module.exports = mongoose.model('Formulario', FormularioSchema)