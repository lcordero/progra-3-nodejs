const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DatosSchema = Schema({
    nombre: String,
    apellido: String,
    pais: String 
})

module.exports = mongoose.model("Datos",DatosSchema)