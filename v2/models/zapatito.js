const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ZapatitoSchema = Schema({
    marca: String,
    talla: {type: Number, default: 0 },
    descripcion: String

})

module.exports = mongoose.model('Zapatito', ZapatitoSchema)