"use strict"

const Producto = require("../model/producto")

function obtenerProducto (req, res) {
    let productoID = req.params.product

    Producto.findById(productoID, (err, producto) => {
        if (err) return res.status(500).send({message: `Error al encontrar el producto: ${err}`})
        if (!producto) return res.status(404).send({message: `No se encuentra su puto producto`})

        res.status(200).send({ producto })
    })
}

function obtenerProductos (req, res) {
    producto.find({}, (err, productos) => {
        if (err) return res.status(500).send({message: `Error al encontrar el producto: ${err}`})
        if (err) return res.staus(400).send({message: `No existen productos`})

        res.status(200).send({ productos })
    })
}

function guardarProducto (req, res) {
    console.log("POST /api/product")
    console.log(req.body)


let producto = new Producto()
producto.name = req.body.nombre
producto.precio = req.params.precio

producto.save((err, productoStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ producto: productoStored })
  })
}

function updateProducto (req, res) {
    let productoID = req.params.productoID
    let update = req.body

    Producto.findByIdAndUpdate(productoID, update, (err, productoUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

        res.status(200).send({ product: productoUpdated })

    })
}

module.exports = {
    obtenerProducto,
    obtenerProductos,
    guardarProducto,
    updateProducto
  }