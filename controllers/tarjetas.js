'use strict'
const Tarjetas = require('../models/tarjetas')


function getTarjeta (req, res) {
    let tarjeta = req.params.tarjeta

    res.status(200).send({ tarjeta })
}

function saveTarjeta (req, res) {
    console.log('POST /tarjetas')

    let tarjeta = new Tarjeta()
    tarjeta.name = req.body.name
    tarjeta.color = req.body.color
    
    res.status(200).send({ tarjeta: tarjetaStored })
}

//function updateTarjeta (req, res) {
//    let tarjeta = req.param.tarjeta
//    let update = req.body
//
//    res.status(200).send({message: "Cambio de color"})
//}

module.exports = {
    getTarjeta,
    saveTarjeta,
  //  updateTarjeta,
}
