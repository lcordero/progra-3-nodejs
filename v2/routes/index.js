'use strict'

const express = require('express')
// const productCtrl = require('../controllers/product')
// const userCtrl = require('../controllers/user')
// const zapatoCtrl = require(`controllers/zapato`)
const auth = require('../middlewares/auth')
const api = express.Router()
const postCtrl = require(`../controllers/posts`)

// post 
api.get(`/post/:postId`, postCtrl.getPostsID)
api.get(`/post`, postCtrl.getPosts)
api.post(`/post`, postCtrl.save)
api.delete(`/post/:postId`, zapatoCtrl.deleteZapato)
api.put(`/post/:postId`, zapatoCtrl.updateProduct)

// comment
api.get(`/comment/:commentId`, commentCtrl.getcommentsID)
api.get(`/comment`, commentCtrl.getcomments)
api.comment(`/comment`, commentCtrl.savecomment)
api.delete(`/comment/:commentId`, zapatoCtrl.deleteZapato)
api.put(`/comment/:commentId`, zapatoCtrl.updatecomment)

// zapato
// api.get(`/zapato`, zapatoCtrl.getZapatos)
// api.get(`/zapato/:zapatoId`, zapatoCtrl.getZapato)
// api.post(`/zapato`, zapatoCtrl.saveZapato)
// api.delete(`zapato/:zapatoId`, zapatoCtrl.deleteZapato)
 
// api.get('/product', productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', productCtrl.saveProduct)
// api.put('/product/:productId', productCtrl.updateProduct)
// api.delete('/product/:productId', productCtrl.deleteProduct)

// api.get('/product', auth, productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', auth, productCtrl.saveProduct)
// api.put('/product/:productId', auth, productCtrl.updateProduct)
// api.delete('/product/:productId', auth, productCtrl.deleteProduct)
// api.post('/signup', userCtrl.signUp)
// api.post('/signin', userCtrl.signIn)
// api.get('/private', auth, (req, res) => {
//   res.status(200).send({ message: 'Tienes acceso' })
// })

module.exports = api
