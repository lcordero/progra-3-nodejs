
const User = require('../models/user')
const formulario = require('../formulario')

function Up (req, res) {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    country: req.body.country
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ token: formulario.createToken(user) })
  })
}

function signIn (req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: formulario.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}