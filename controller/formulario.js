const Formulario = require('../models/formulario')

function getFormulario (req, res) {
  let formulariotId = req.params.formularioId

  Formulario.findById(forularioId, (err, formulario) => {
    if (err) return res.status(500).send({message: `Error': ${err}`})
    if (!product) return res.status(404).send({message: `El formulario no existe`})

    res.status(200).send({ formulario })
  })
}

function getFormularios (req, res) {
  Product.find({}, (err, formularios) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).send({message: 'No existen formularios'})

    res.send(200, { formularios })
  })
}

function saveFormulario (req, res) {
  console.log('POST /api/formulario')
  console.log(req.body)

  let formulario = new Formulario()
  formulario.name = req.body.name
  formulario.lastname = req.body.lastname
  formulario.country = req.body.country
  product.description = req.body.description

  formulario.save((err, formularioStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ formulario: formularioStored })
  })
}

function updateFormulario (req, res) {
  let formularioId = req.params.formularioId
  let update = req.body

  Formulario.findByIdAndUpdate(formularioId, update, (err, formularioUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar la base de datos: ${err}`})

    res.status(200).send({ formulario: formularioUpdated })
  })
}

function deleteFormulario (req, res) {
  let formularioId = req.params.formularioId

  Product.findById(formularioId, (err, formulario) => {
    if (err) res.status(500).send({message: `Error al borrar el formulario: ${err}`})

    formulario.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el formulario: ${err}`})
      res.status(200).send({message: 'El formulario ha sido eliminado'})
    })
  })
}

module.exports = {
  getFormulario,
  getFormulario,
  saveFormulario,
  updateFormulario,
  deleteFormulario
}