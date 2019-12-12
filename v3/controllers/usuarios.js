const Usuarios = require('../models/usuarios')


function getUsuarios (req, res) {
    Usuarios.find({}, (err, usuarios) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!usuarios) return res.status(404).send({message: 'No existen los usuarios'})
  
      res.send(200, { 'usuarios': usuarios[0] })
    })
}

function updateUsuarios (req, res) {
    let usuariosId = req.params.usuariosId
    let update_usuarios = req.body
  
    Usuarios.findByIdAndUpdate(usuariosId, update_usuarios, (err, usuariosUpdated) => {
      console.log("======= HEREEEE ======")
      if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})
  
      res.status(200).send({ usuarios: update_usuarios })
    })
}

function deleteUsuarios (req, res) {
    let usuariosId = req.params.usuariosId
  
    Usuarios.findById(usuariosId, (err, usuarios) => {
      if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`})
  
      usuarios.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el usuarios: ${err}`})
        res.status(200).send({message: 'El usuarios ha sido eliminado'})
      })
    })
  }


module.exports = {
    getUsuarios,
    updateUsuarios,
    deleteUsuarios
  }