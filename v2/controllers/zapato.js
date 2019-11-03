'use strict'

const Zapato = require('../models/zapato')

function getZapato (req, res) {
    let zapatoId = req.params.zapatoId

    Zapato.finById(zapatoId,(err, zapa) => {
     if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
     if (zapa) return res.status(404).send({message: `El producto no existe`})
    
    res.status(200).send({product})
    })}

function getZapato (req, res){
  Zapato.find({},(err, products) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).send({message: 'No existen productos'})

    res.send(200, { products })
})
}
function saveZapato (req, res) {
  console.log('POST /api/zapato')
  console.log(req.body)
      
  let zapato = new Zapato()
  zapato.name = req.body.name
  zapato.picture = req.body.picture
  zapato.price = req.body.price
  zapato.category = req.body.category
  zapato.description = req.body.description
      
  zapato.save((err, productStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
      
    res.status(200).send({ zapato: productStored })
})
}

function updateZapato (req,res){
  let zapatoId = req.params.zapatoId
  let update = req.body

  Zapato.findByIdAndUpdate(zapatoId, update, (err, res) => {

  if (err) res.status(500).send({message:`Error al actualizar el producto: ${err}`})

  res.sattus(200).send({zapato: zapatoUpdated})

  })
}

