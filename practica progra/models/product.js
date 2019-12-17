const mongoose = require('mongoose')
const schema = mongoose.schema

const ProductSchema = schema({
name: String,
lastname:String    
})


module.exports = mongoose.model('Product',ProductSchema)