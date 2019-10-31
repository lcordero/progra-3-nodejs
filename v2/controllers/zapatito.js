const Zapatito = require('../models/zapatito')

function getZapatito (req, res) {
    console.log()
    Zapatito.find({}, (err, zapatito) => {
      if (err) return res.status(500).send({message: `Error al fatal: ${err}`})
      if (!zapatito || zapatito.length == 0) return res.status(404).send({message: 'El zapatito no existen'})
  
      res.send(200, { zapatitos })
    })
}

function getZapatito (req, res) {
    console.log()
    let zapatitoId = req.params.zapatitoId
  
    Zapatito.findById(zapatitoId, (err, zapatito) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!zapatito) return res.status(404).send({message: `El zapatito no existe`})
  
      res.status(200).send({ zapatito })
    })
}

function saveZapatito (req, res) {
    console.log('POST /api/zapatito')
    console.log(req.body)
  
    let zapatito = new Zapatito()
    zapatito.name = req.body.name
    zapatito.size = req.body.size
    zapatito.description = req.body.description
  
    zapatito.save((err, zapatitoStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ zapatito: zapatitoStored })
    })
}


module.exports = {
    getZapatito,
    saveZapatito,
  }