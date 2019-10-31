const Zapatito = require('../models/zapatito')

function getZapatito (req, res) {
    Zapatito.find({}, (err, zapatito) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!zapatito || zapatito.length == 0) return res.status(404).send({message: 'No existen el zapatito'})
  
      res.send(200, { products })
    })
  }

  function saveZapatito (req, res) {
    console.log('POST /api/zapatito')
    console.log(req.body)
  
    let zapatito = new Zapatito()
    zapatito.name = req.body.name
    zapatito.tamaño = req.body.tamaño
    zapatito.description = req.body.description
  
    zapatito.save((err, zapatitoStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ zapatito: zapatitoStored })
    })
  }


  module.exports = {
    getProduct,
    saveProduct,
  }