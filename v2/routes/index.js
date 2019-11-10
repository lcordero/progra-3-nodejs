'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const zapatitoCtrl = require('../controllers/zapatito')
const userCtrl = require('../controllers/user')
const postCtrl = require('../controllers/posts')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)

//api.get('/zapatito', zapatitoCtrl.getZapatito)
//api.post('/zapatio', zapatitoCtrl.saveZapatito)



api.get('/posts', postCtrl.getposts)
api.get('/posts/:id', postCtrl.getposts)
api.get('/posts/:id/comments/', postCtrl.getposts)
api.get('/posts/:id/comments/:id', postCtrl.getposts)
api.post('/posts', postCtrl.saveposts)
api.post('/posts/:id', postCtrl.saveposts)
api.post('/posts/:id/comments', postCtrl.saveposts)
api.post('/posts/:id/comments/:id', postCtrl.saveposts)
api.put('/posts', postCtrl.updatepost)
api.put('/posts/:id', postCtrl.updatepost)
api.put('/posts/:id/comments', postCtrl.updatepost)
api.put('/posts/:id/comments/:id', postCtrl.updatepost)
api.delete('/posts', postCtrl.deletepost)
api.delete('/posts/:id', postCtrl.deletepost)
api.delete('/posts/:id/comments', postCtrl.deletepost)
api.delete('/posts/:id/comments/:id', postCtrl.deletepost)






api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
// api.get('/product', auth, productCtrl.getProducts)
// api.get('/product/:productId', productCtrl.getProduct)
// api.post('/product', auth, productCtrl.saveProduct)
// api.put('/product/:productId', auth, productCtrl.updateProduct)
// api.delete('/product/:productId', auth, productCtrl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api
