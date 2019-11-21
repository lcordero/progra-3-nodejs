'use strict'
const Tarjetas = require('../models/tarjetas')

function getTarjeta (req, res) {
    let tarjeta = req.params.tarjeta
    res.status(200).send({ tarjeta })
}

functionsaveTarjeta (req, res) {
    console.log('POST /api/tarjetas')
let tarjeta = new Tarjeta()
tarjeta.name = req.body.name
tarjeta.color = req.body.picture

res.status(200).send({ tarjeta: tarjetaStored })
}

module.exports = {
    getTarjeta,
    saveTarjeta,
}
