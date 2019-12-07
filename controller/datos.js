"use strict"

const Datos = require("../models/datos")

function getDatos (req, res) {
    Datos.find({}, (err, datos) => {
      if (err) return res.status(500).send({message: `Error: ${err}`})
      if (!datos) return res.status(404).send({message: 'No existe'})
  
      res.send(200, { datos })
    })
  }

  function updateDatos (req, res) {
    let datosId = req.params.datosId
    let update = req.body
  
    Datos.findByIdAndUpdate(datosId, update, (err, datosUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar: ${err}`})
  
      res.status(200).send({ datos: datosUpdated })
    })
  }
  
module.exports = {
    getDatos,
    updateDatos
}


