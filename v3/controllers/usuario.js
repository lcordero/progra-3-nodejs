const Usuario = require('../models/usuario')

function getUsuarios (req, res) {
    Usuario.find({}, (err, usuarios) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!usuarios) return res.status(404).send({message: 'No existen usuarios'})
       res.status(200).send(usuarios) 
      // res.send(200, { usuarios })
    })
  }

  function updateUsuario (req, res) {
    let usuarioId = req.params.usuarioId
    let update = req.body
  
    Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})
  
      res.status(200).send({ usuario: usuarioUpdated })
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
  
  module.exports = {
    getUsuarios,
    updateUsuario,
    deleteUsuario
  }