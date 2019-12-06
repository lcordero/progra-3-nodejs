'use strict'

const Msg = require('../models/message')


function getMsg(req, res) {
  let msgId = req.params.msgId

  Msg.findById(msgId, (err, msg) => {
      if (err) return res.status(500).send({ msg: `Error al realizar la petición: ${err}` })
      if (!msg) return res.status(404).send({ msg: `El mensaje no existe` })

      res.status(200).send({ msg })
  })
}


function getMsgs(req, res) {
    Msg.find({}, (err, msgs) => {
      if (err) return res.status(500).send({msg: `Error al realizar la petición: ${err}`})
      if (!msgs) return res.status(404).send({msg: 'No existen el mensaje'})
  
      res.send(200, { msgs })
    })
  }

  function saveMsg (req, res) {
    console.log('POST /api/msg')
    console.log(req.body)
  
    let msg = new msg()
    msg.content = req.body.content

  
    msg.save((err, msgStored) => {
      if (err) res.status(500).send({msg: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ msg: msgStored })
    })
  } 

  function updateMsg(req, res) {
    let msgId = req.params.msgId
    let update = req.body

    msg.findByIdAndUpdate(msgId, update, (err, msgUpdated) => {
        if (err) res.status(500).send({ msg: `Error al actualizar el mensaje: ${err}` })

        res.status(200).send({ msg: msgUpdated })
    })
}

function deleteMsg(req, res) {
  let msgId = req.params.msgId

  msg.findById(msgId, (err, msg) => {
      if (err) res.status(500).send({ msg: `Error al borrar el mensaje: ${err}` })

      msg.remove(err => {
          if (err) res.status(500).send({ msg: `Error al borrar el mensaje: ${err}` })
          res.status(200).send({ msg: 'El mensaje ha sido eliminado' })
      })
  })
}

  module.exports = {
    getMsg,
    getMsgs,
    saveMsg,
    updateMsg,
    deleteMsg
  }