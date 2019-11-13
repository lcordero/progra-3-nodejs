'use strict'

const express = require('express')
const postCtrl = require('../controllers/Post') 
const commentCtrl = require('../controllers/comment')
//const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/Post', postCtrl.getPost)
api.get('/Post/:Id', postCtrl.getPost)
api.post('/Post', postCtrl.savePost)
api.put('/Post/:PosttId', postCtrl.updatePost)
api.delete('/Post/:PostId', postCtrl.deletePost)

api.get('/comment', commentCtrl.getcomment)
api.get('/comment/:Id', commentCtrl.getcomment)
api.post('/comment', commentCtrl.savecomment)
api.put('/comment/:commentId', commentCtrl.updatecomment)
api.delete('/comment/:commentId', commentCtrl.deletecomment)

api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api