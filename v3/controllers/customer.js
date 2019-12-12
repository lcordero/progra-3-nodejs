'use strict'

const User = require('../models/User')


function getUsers (req, res) {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!users) return res.status(404).send({message: 'No existen usuarios'})

    res.send(200, { users })
  })
}

function putUsers (req, res) {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!users) return res.status(404).send({message: 'No existen usuarios'})

    res.send(200, { users })

function updateUser (req, res) {
  let userId = req.params.userId
  let update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})

    res.status(200).send({ user: userUpdated })
  })
}
  let userId = req.params.userId
  let update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})

    res.status(200).send({ user: userUpdated })

      let userId = req.params.userId
  let update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el usuario: ${err}`})

    res.status(200).send({ user: userUpdated })

function deleteUser (req, res) {
  let userId = req.params.userId

  User.findById(userId, (err, user) => {
    if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`})

    user.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el usuario: ${err}`})
      res.status(200).send({message: 'Se ha eliminado el usuario'})
    })
  })
}

module.exports = {
  getUser,
  getUsers,
  putUser,
  updateUser,
  deleteUser
}