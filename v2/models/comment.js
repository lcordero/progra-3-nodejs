"use strict"

import { Mongoose } from "mongoose"
import { strict } from "assert"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({

name: String,
posts:[{ type: Schema.Types.ObjectId, ref: 'Post'}]

});
module.export = mongoose.model{'comment', commentSchema};