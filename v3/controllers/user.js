'use strict'

const User = require('../models/routexa')

function updateUser (req, res) {
  let userId = req.params.userId
  let update = req.body

  function deleteUser (req, res) {
    let userId = req.params.userId
  
    User.findById(userId, (err, user) => {
      if (err) res.status(500).send({message: `Error: ${err}`})
  
      user.remove(err => {
        if (err) res.status(500).send({message: `Error: ${err}`})
        res.status(200).send({message: 'Eliminado'})
      })
    })
  }

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) res.status(500).send({message: `Error: ${err}`})

    res.status(200).send({ user: userUpdated })
  })
}
function getUsers (req, res) {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({message: `Error: ${err}`})
    if (!users) return res.status(404).send({message: 'Not found'})

    res.send(200, { users })
  })
}



module.exports = {
  getUsers,
  updateUser,
  deleteUser
};