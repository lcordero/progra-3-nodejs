'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
<<<<<<< HEAD
const zapatitoCtrl = require('../controllers/zapatito')
const postsCtrl = require('../controllers/posts')
=======
>>>>>>> 5c25debc8ff135dd5eebe68d1470cc83b348b2d3
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)
<<<<<<< HEAD

api.get('/zapatito', zapatitoCtrl.getZapatito)
api.get('/zapatito/:zapatitoId', zapatitoCtrl.getZapatito)
api.post('/zapatito', zapatitoCtrl.saveZapatito)

api.get('/posts', postsCtrl.getPosts)
api.get('/posts/:postsId', postsCtrl.getPosts)
api.post('/posts', postsCtrl.savePosts)
api.put('/posts/:postsId', postsCtrl.updatePosts)
api.delete('/posts/:postsId', postsCtrl.deletePosts)
=======
>>>>>>> 5c25debc8ff135dd5eebe68d1470cc83b348b2d3
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

<<<<<<< HEAD
module.exports = api
=======
module.exports = api
>>>>>>> 5c25debc8ff135dd5eebe68d1470cc83b348b2d3
