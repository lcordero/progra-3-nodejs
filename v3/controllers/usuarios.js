'use strict'

const Usuario = require('../models/usuarios')

function getUsuario (req, res) {
  let usuarioId = req.params.usuarioId

  Usuario.findById(usuarioId, (err, usuario) => {
    if (err) return res.status(500).send({message: `Error al pedir el usuario: ${err}`})
    if (!usuario) return res.status(404).send({message: `El usuario no existe`})

    res.status(200).send({ usuario })
  })
}

function getUsuarios (req, res) {
  Usuario.find({}, (err, usuarios) => {
    if (err) return res.status(500).send({message: `Error al pedir los usuarios: ${err}`})
    if (!usuarios) return res.status(404).send({message: 'No existen usuarios'})

    res.send(200, { usuarios })
  })
}

function deleteUsuario (req, res) {
    let usuarioId = req.params.usuarioId
  
    Usuario.findById(usuarioId, (err, usuario) => {
      if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`})
  
      usuario.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`})
        res.status(200).send({message: 'El usuario ha sido eliminado'})
      })
    })
  }

  function updateUsuario (req, res) {
    let usuarioId = req.params.usuarioId
    let update = req.body
  
    Usuario.findByIdAndUpdate(usuarioId, update, (err, UsuarioUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})
  
      res.status(200).send({ usuario: UsuarioUpdated })
    })
  }

  module.exports = {
    getUsuario,
    getUsuarios,
    deleteUsuario,
    updateUsuario 
  }