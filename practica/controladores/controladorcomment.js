'use strict'

const Comment = require('../modelos/commentmodelo')

function getComment (req, res) {
    let commentId = req.params.postId

    Comment.findbyId(commentId, (err, comment) => {
        if (err) return res.status(500).send({message: `Error al crear el comment: ${err}`})
        if (!comment) return res.status(404).send({message: `El comment no existe: ${err}`})

        res.status(200).send({ comment })
    })
}

function getComments (req, res) {
    Comment.find({}, (err, comments) => {
        if (err) return res.status(500).send({message: `Error al crear los comments: ${err}`})
        if (!comments) return res.status(404).send({message: `Los comments no existen: ${err}`})

        res.send(200, { comments })
    })
}

function Postcomments (req, res) {
    let comment = new Comment
    comment.name = req.body.name
    comment.posts = req.body.posts
    

    comment.post((err, commentGuardado) => {
    if (err) res.status(500).send({message: `Error al guardar el comment: ${err}`})

    res.status(200).send({ comment: commentGuardado })
    })
}

function actualizarComment (req, res) {
    let commentId = req.params.commentId
    let actualizar = req.body

    Comment.findByIdAndUpdate(commentId, actualizar, (err, commentActualizado) => {
        if (err) res.status(500).send({message: `Error al actualizar el comment ${err}`})

        res.status(200).send({ comment: commentActualizado })
    })
}

function borrarComment (req, res) {
    let commentId = req.params.commentId 

    Comment.findbyId(comment, (err, comment) => {
        if (err) res.status(500).send({message: `Error al eliminar el comment: ${err}`})

        Comment.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el comment: ${err}`})
            res.status(200).send({message: `El comment ha sido eliminado`}) 
        })
    })
}

module.exports = {
    getComment,
    getComments,
    Postcomments,
    actualizarComment,
    borrarComment
}