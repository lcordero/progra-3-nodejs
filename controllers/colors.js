'use strict'

const Colors = require('../models/colors')

function getcolor (req, res) {
  let colorsId = req.params.colorsId

  Colors.findById(colorsId, (err, colors) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    

    res.status(200).send({ Colors })
  })
}

function getcolors (req, res) {
    Colors.find({}, (err, colors) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})

    res.send(200, { Colors })
  })
}

function saveColors (req, res) {
    console.log('POST /api/color')
    console.log(req.body)
  
    let colors = new Color()
    colors.name = req.body.name
    colors.desc = req.body.desc
  
    color.save((err, colorsStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ colors: colorsStored })
    })
  }

  module.exports = {
    getcolor,
    getcolors,
    saveColors
  }