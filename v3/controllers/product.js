'use strict'

// Cargo en una variable la ruta del modelo para poder cargarlo y utilizarlo en el controller
const Product = require('../models/product')

// Hago una funcion que me permita traer el o los productos
function getProduct (req, res) {
  /*Declaro una variable en este caso productId para que cuando se ejecute esta haga su magia y muera al terminar de ejecutar*/
  let productId = req.params.productId
  // Hago que el producto pueda ser encontrado por un ID esto trayendolo de la base de datos
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!product) return res.status(404).send({message: `El producto no existe`})

    res.status(200).send({ product })
  })
}

function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).send({message: 'No existen productos'})

    res.send(200, { products })
  })
}

function saveProduct (req, res) {
  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ product: productStored })
  })
}

function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

    res.status(200).send({ product: productUpdated })
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

    product.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: 'El producto ha sido eliminado'})
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
