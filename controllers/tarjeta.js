'use strict'
const Tarjeta = require('../models/tarjeta')


function getTarjetas (req, res) {
    let tarjetaId = req.params.tarjetaId
    Tarjeta.find({}, (err, tarjeta) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!tarjeta) return res.status(404).send({message: `La tarjeta no esta`})
    
    res.status(200).send({ tarjetas })
})
}

function saveTarjeta (req, res) {
    console.log('POST /api/tarjeta')
    console.log(req.body)
    let tarjeta = new Tarjeta()
    tarjeta.name = req.body.name
    tarjeta.color = req.body.color
    
    tarjeta.save((err, tarjetaStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
    
    res.status(200).send({ tarjeta: tarjetaStored })
})
}

function updateTarjeta (req, res) {
    let tarjetaId = req.params.tarjeta
    let update = req.body

    Tarjeta.findByIdAndUpdate(tarjetaId, update, (err, tarjetaUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar esta tarjeta: ${err}`})
    
    console.log("aqui actualizo")
    res.status(200).send({ tarjeta: tarjetaUpdate })
})
}

module.exports = {
    getTarjetas,
    saveTarjeta,
    updateTarjeta,
}
