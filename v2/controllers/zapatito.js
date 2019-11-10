'Use strict'

const Zapatito = require('../models/zapatito.js')

function getZapatito (req, res) {
    let zapatitoId = req.params.zapatitoId

        Zapatito.findById(zapatitoId,(err, zapatito)=>{
            if(err) return req.status(500).send({message: `Error al analizar la peticion: ${err}` })
            if (!zapatito) return res.status(404).send({message: `El producto no existe`})
            res.status(200).send({ product })
        })
}

function getZapatito (req, res) {
    Product.find({}, (err, products) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!zapatito) return res.status(404).send({message: 'No existen productos'})
  
      res.send(200, { products })
    })
  }

function saveZapatito (req, res) {
    console.log('POST /api/zapatito')
    console.log(req.body)
  
    let zapatito = new Zapatito()
    zapatito.marca = req.body.marca
    zapatito.talla = req.body.talla
    zapatito.descripcion = req.body.descripcion
  
  
    zapatito.save((err, zapatitoStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ zapatito: zapatitoStored })
    })
  }
  