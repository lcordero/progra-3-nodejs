"use strict"


const Zapato = require("../models/zapatos")

function getzapato (req,res){
    let zapatoId = req.params.zapatoId
    Zapato.findById(zapatotId, (err, zapatos) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!zapatos) return res.status(404).send({message: `El zapato no existe`})

    res.status(200).send({ zapatos })

  })
}
function getzapato (req,res){
    Zapato.find({},(err, zapatos)=>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!zapatos) return res.status(404).send({message: `El zapato no existe`})

        res.status(200).send({ zapatos })
    })
}

function savezapato (req, res) {
    console.log('POST /api/zapatos')
    console.log(req.body)

    let zapatos = new Zapato()
    zapatos.name = req.body.name
    zapatos.tamano = req.body.tamano
    zapatos.description = req.body.description
  
    zapatos.save((err, zapatosStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
      res.status(200).send({ zapatos: zapatosStored })
    })
  }



module.exports = {
    getzapato,
    getzapato,
    savezapato}  




