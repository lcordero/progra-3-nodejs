"Use strict"
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsch = new Schema({
    
    comment: String,
    author: { type: String, ref: 'post' }
  });
  module.export = mongoose.model('comment', commentsch);
  
