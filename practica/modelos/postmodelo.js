'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    content: String,
    author: { type: String, ref: 'comment' }
  });
  module.export = mongoose.model('post', postSchema);
  
  