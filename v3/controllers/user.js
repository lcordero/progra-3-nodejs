'use strict'

const User = require('../models/user')


function getUsers (req, res) {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!users) return res.status(404).send({message: 'No existen usuarios'})

    res.send(200, { users })
  })
}

function updateUser (req, res) {
  let userId = req.params.userId
  let update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el usero: ${err}`})

    res.status(200).send({ user: userUpdated })
  })
}

function deleteUser (req, res) {
  let userId = req.params.userId

  User.findById(userId, (err, user) => {
    if (err) res.status(500).send({message: `Error al borrar el usero: ${err}`})

    user.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el usero: ${err}`})
      res.status(200).send({message: 'El usero ha sido eliminado'})
    })
  })
}

module.exports = {
  getUsers,
  updateUser,
  deleteUser
}
