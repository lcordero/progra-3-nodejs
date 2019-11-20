'use strict'

const Product = require('../models/product')

function getProduct (req,res) {
    let productId = req.params.productId

    Product.findById(productId,(err, product)=>{
        if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
        if (!product) return res.status(404).send({message:`El producto no existe`})
        
        res.status(200).send({product})
    })
}

function getProducts (req,res){
    Product.find({},(err,products)=>{
        if (err) return res.status(500).send({message:`Error al relizar la peticion: ${err}`})
        if (!products) return res.status(404).send({message: 'No exiten productos'})

        res.send(200,{products})
    })
}

function saveProduct (req,res) {
    console.log('POST/api/product')
    console.log(req.body)
    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price

    product.save((err,productStored)=>{
        if (err) res.status(500).send({message:`Error al salvar en la bsae de datos ${err}`})
        res.status(200).send({product: productStored})
    })
}
function updateProduct (req,res){
    let productId = req.params.productId
    let update = req.body 

    Product.findByIdAndUpdate(productId, update,(err,productUpdated)=>{
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
        res.status(200).send({product: productUpdated})
    })
}

module.exports ={
    getProduct,
    getProducts,
    saveProduct,
    updateProduct
} 