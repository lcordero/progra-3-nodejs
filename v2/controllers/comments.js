'use strict'

const Comment = require('../models/comment')

function getComment (req, res) {
  let commentId = req.params.commentId

  Comment.findById(commentId, (err, comments) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!comments) return res.status(404).send({message: `El producto no existe`})

    res.status(200).send({ comments })
  })
}

function getCommets (req, res) {
  Comment.find({}, (err, products) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).send({message: 'No existen comment'})

    res.send(200, { products })
  })
}

function saveComment (req, res) {
  console.log('POST /api/comments')
  console.log(req.body)

  let comments = new Comment()
  comments.name = req.body.name
  comments.picture = req.body.picture
  comments.price = req.body.price
  comments.category = req.body.category
  comments.description = req.body.description

  comments.save((err, commentStock) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ comments: commentStock })
  })
}

function updateComment (req, res) {
  let commentId = req.params.commentId
  let update = req.body

  Product.findByIdAndUpdate(commentId, update, (err, productUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

    res.status(200).send({ comments: productUpdated })
  })
}

function deleteComment (req, res) {
  let commentId = req.params.commentId

  Product.findById(commentId, (err, comments) => {
    if (err) res.status(500).send({message: `Error al borrar el comentario: ${err}`})

    comments.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el comentario: ${err}`})
      res.status(200).send({message: 'El comentario ha sido eliminado'})
    })
  })
}

module.exports = {
  getcomment,
  getCommets,
  saveComment,
  updateComment,
  deleteComment
}
