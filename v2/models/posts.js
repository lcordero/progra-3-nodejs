'use strick'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = Schema({
    title: String,
    content: String
  });

module.export = mongoose.model('posts', postsSchema)
