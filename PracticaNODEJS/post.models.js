"use strict"
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const postSchema = new Schema({
    title: String,
    content: String,
    author: { type: String, ref: 'User' }
  });
  module.export = mongoose.model('Post', postSchema);