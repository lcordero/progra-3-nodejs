'Use strict'
const Usuarios = require('../models/usuarios')

function getUsuario (req, res) {
    Usuarios.find({}, (err, usua) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!usua) return res.status(404).send({message: 'No existen productos'})
  
      res.send(200, { usua })
    })
  }
  

  function updateUsuario (req, res) {
    let usuarioId = req.params.usuariosId
    let update = req.body
  
    Usuarios.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
  
      res.status(200).send({ usuario: usuarioUpdated })
    })
  }
  
  function deleteUsuario (req, res) {
    let usuarioId = req.params.usuariosId
  
    Usuarios.findById(usuariosId, (err, usua) => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
  
      usua.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
        res.status(200).send({message: 'El producto ha sido eliminado'})
      })
    })
  }

  module.exports={
      getUsuario,
      updateUsuario,
      deleteUsuario
  }