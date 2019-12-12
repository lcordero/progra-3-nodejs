'use strict'

const usuario = require('../models/usuarios')

function getUsuario (req, res) {
  let usuarioId = req.params.usuarioId

  usuario.findById(usuarioId, (err, usuario) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!usuario) return res.status(404).send({message: `El usuario no existe`})

    res.status(200).send({ usuario })
  })
}

function getUsuarios (req, res) {
  usuario.find({}, (err, usuarios) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!usuarios) return res.status(404).send({message: 'No existen usuarioos'})

    res.send(200, { usuarios })
  })
}



function updateUsuario (req, res) {
  let usuarioId = req.params.usuarioId
  let update = req.body

  usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el usuarioo: ${err}`})

    res.status(200).send({ usuario: usuarioUpdated })
  })
}

function deleteUsuario (req, res) {
  let usuarioId = req.params.usuarioId

  usuario.findById(usuarioId, (err, usuario) => {
    if (err) res.status(500).send({message: `Error al borrar el usuarioo: ${err}`})

    usuario.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el usuarioo: ${err}`})
      res.status(200).send({message: 'El usuario ha sido eliminado'})
    })
  })
}

module.exports = {
  getUsuario,
  getUsuarios,
  updateUsuario,
  deleteUsuario
}