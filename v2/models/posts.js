const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postsSchema = new Schema({
    title: String,
    coments: String,
    author: { type: String, ref: 'Comment' }
});

module.export = mongoose.model('Posts', postsSchema);

const CommentSchema = new Schema({
    name: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Posts'}]
});

module.export = mongoose.model('Comment', CommentSchema);