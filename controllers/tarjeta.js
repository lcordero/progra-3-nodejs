'use strict'
const Tarjeta = require('../models/tarjeta')


function getTarjetas (req, res) {
    let tarjeta = req.params.tarjeta
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
    
       res.status(200).send( 'tarjeta guardada' )
}


function updateTarjeta (req, res) {
    let tarjeta = req.params.tarjeta
    let update = req.body

    Tarjeta.findByIdAndUpdate(tarjeta, update, (err, tarjetaUpdated) => {
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
