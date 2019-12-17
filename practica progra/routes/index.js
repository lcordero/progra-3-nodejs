const express = require('express')
const productCrtl = ('../controllers/product')
const api = express.Router()


api.get('/product',productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product /:productId', productCtrl.updateProduct)


module.exports = api