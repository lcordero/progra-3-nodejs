const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = Schema({
  papas: String,
  price: { type: Number, default: 0 },
  
})

module.exports = mongoose.model('Menu', menuSchema)
