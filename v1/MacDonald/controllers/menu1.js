const Orden = require('../models/menu')


function getOrden (req, res) {
  let ordenId = req.params.ordenId

  Orden.findById(ordenId, (err, orden) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!orden) return res.status(404).send({message: `El producto no existe`})

    res.status(200).send({ orden })
  })
}

function getOrdenes (req, res) {
  Orden.find({}, (err, ordens) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!ordens) return res.status(404).send({message: 'No existen productos'})

    res.send(200, { ordens })
  })
}

function saveOrden (req, res) {
  console.log('POST /api/orden')
  console.log(req.body)

  let orden = new Orden()
  orden.combo = req.body.combo
  orden.bebida = req.body.bebida
  orden.acompañamiento = req.body.acompañamiento

  orden.save((err, ordenTienda) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ orden: ordenTienda })
  })
}

function updateOrden (req, res) {
  let ordenId = req.params.ordentId
  let update = req.body

  Orden.findByIdAndUpdate(ordenId, update, (err, ordenUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

    res.status(200).send({ orden: ordenUpdated })
  })
}

function deleteOrden (req, res) {
  let ordenId = req.params.ordenId

  Orden.findById(ordenId, (err, orden) => {
    if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

    orden.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: 'El producto ha sido eliminado'})
    })
  })
}

module.exports = {
  getOrden,
  getOrdenes,
  saveOrden,
  updateOrden,
  deleteOrden
}









