

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DatosSchemma = Schema({
    Nombre: String,
    Apellido: String,
    Pais: String

})

module.exports = mongoose.model('Datos', DatosSchema)