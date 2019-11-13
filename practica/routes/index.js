'use strict'

const express = require('express')
const PostCtrl = require('../controllers/controladorpost')
const CommentCtrl = require('../controllers/controladorcomment')
const api = express.Router()

api.get('/post', PostCtrl.getPosts)
api.get('/post/:postId', PostCtrl.getPost)
api.post('/post', PostCtrl.Postpost)
api.put('/post/:postId', PostCtrl.actualizarPost)
api.delete('/post/:postId', PostCtrl.borrarPost)
// api.get('/product', auth, productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', auth, productCtrl.saveProduct)
// api.put('/product/:productId', auth, productCtrl.updateProduct)
// api.delete('/product/:productId', auth, productCtrl.deleteProduct)
// api.post('/signup', userCtrl.signUp)
// api.post('/signin', userCtrl.signIn)
// api.get('/private', auth, (req, res) => {
  // res.status(200).send({ message: 'Tienes acceso' })
// })
api.get('/comment', CommentCtrl.getComments)
api.get('/comment/:commentId', CommentCtrl.getComment)
api.post('/comment', CommentCtrl.Postcomment)
api.put('/comment/:commentId', CommentCtrl.actualizarComment)
api.delete('/comment/:commentId', CommentCtrl.borrarComment)

module.exports = api