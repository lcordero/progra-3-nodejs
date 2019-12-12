'use strict'

const Usuarios = require('../models/usuarios')

function getUsuarios (req, res) {
  console.log("wtf")
  Usuarios.find({}, (err, usuarios) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!usuarios) return res.status(404).send({message: 'No existen usuariosos'})

    res.send(200, { usuarios })
  })
}

function updateUsuarios (req, res) {
  let usuariosId = req.params.usuariosId
  let update = req.body

  Usuarios.findByIdAndUpdate(usuariosId, update, (err, usuariosUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el usuarioso: ${err}`})

    res.status(200).send({ usuarios: usuariosUpdated })
  })
}

function deleteUsuarios (req, res) {
  let usuariosId = req.params.usuariosId

  Usuarios.findById(usuariosId, (err, usuarios) => {
    if (err) res.status(500).send({message: `Error al borrar el usuarioso: ${err}`})

    usuarios.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el usuarioso: ${err}`})
      res.status(200).send({message: 'El usuarioso ha sido eliminado'})
    })
  })
}

module.exports = {
  getUsuarios,
  updateUsuarios,
  deleteUsuarios
}