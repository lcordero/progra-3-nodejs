'use strict'

const Zapato = require('../models/Zapato')

function traerzapato (req, res) {
let zapatoid = req.params.Zapatoid

Zapato.findByid(zapatoid, (err, zapato) => {
    if (err) return res.status(500).send({message: `Error al pedir el zapato: ${err}`})
    if (!zapato) return res.status(404).send({message: `No se encontro al zapatito xD`})

    res.status(200).send({ zapato })
 })
}

function traerzapatos (req, res) {
Zapato.find({}, (err, zapatos) => {
    if (err) return res.status(500).send({message: `Error al pedir el zapato: ${err}`})
    if (!zapatos) return res.status(404).send({message: `No se encontraron los zapatitos`})
res.status(200).send({ zapatos })
 })
}

function salvarproducto (req, res) {
console.log("POST api/zapato")
console.log(req.body)
}

let zapato = new Zapato()
zapato.name = req.body.nombre
zapato.tamaño = req.body.nombre
zapato.descripcion = req.body.descripcion

zapato.save((err, zapatoStored) => {
    if (err) res.status(500).send({message: `Error al salvar el zapato en la base de datos: ${err} `})
    res.status(200).send({ zapato: zapatoStored })
  })

  module.exports = {
    traerzapato,
    traerzapatos,
    salvarproducto,
  }
  

