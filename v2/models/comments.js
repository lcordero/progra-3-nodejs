'use strick'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = Schema({
    name: String,
    posts: [postSchema]
     });
module.export = mongoose.model('comments', commentsSchema);