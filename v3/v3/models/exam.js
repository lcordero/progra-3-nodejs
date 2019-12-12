const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = Schema({
name: String,
address:String,
phone: {type:Number},
Action:String
}) 

module.exports = mongoose.model('exam', examSchema)