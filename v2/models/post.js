"use strict"
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({

tittle = String,
content = String,
aurhor: {type:String, ref:"User"}

})
module.export = mongoose.model('Post', postSchema);