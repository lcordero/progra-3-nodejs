
'use strict'

const Datos = require('../models/datos')

function getDatos (req, res) {
  let datosId = req.params.datosId

  Datos.findById(datosId, (err, datos) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!datos) return res.status(404).send({message: `El datoso no existe`})

    res.status(200).send({ datos })
  })
}

function getDatoss (req, res) {
  Datos.find({}, (err, datoss) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!datoss) return res.status(404).send({message: 'No existen datosos'})

    res.send(200, { datoss })
  })
}

function saveDatos (req, res) {
  console.log('POST /api/datos')
  console.log(req.body)

  let datos = new Datos()
  datos.name = req.body.name
  datos.picture = req.body.picture
  datos.price = req.body.price
  datos.category = req.body.category
  datos.description = req.body.description

  datos.save((err, datosStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ datos: datosStored })
  })
}




module.exports = {
  getDatos,
  getDatos,
  saveDatos,

}
