'use strict'

const Post = require('../modelos/postmodelo')

function getPost (req, res) {
    let postId = req.params.postId

    Post.findbyId(postId, (err, post) => {
        if (err) return res.status(500).send({message: `Error al crear el post: ${err}`})
        if (!post) return res.status(404).send({message: `El post no existe: ${err}`})

        res.status(200).send({ post })
    })
}

function getPosts (req, res) {
    Post.find({}, (err, posts) => {
        if (err) return res.status(500).send({message: `Error al crear los post: ${err}`})
        if (!posts) return res.status(404).send({message: `Los posts no existen: ${err}`})

        res.send(200, { posts })
    })
}

function Postpost (req, res) {
    let post = new Post
    post.title = req.body.title
    post.content = req.body.content
    post.author = req.body.author

    post.post((err, postGuardado) => {
    if (err) res.status(500).send({message: `Error al guardar el post: ${err}`})

    res.status(200).send({ post: postGuardado })
    })
}

function actualizarPost (req, res) {
    let postId = req.params.postId
    let actualizar = req.body

    Post.findByIdAndUpdate(postId, actualizar, (err, productoActualizado) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto ${err}`})

        res.status(200).send({ post: productoActualizado })
    })
}

function borrarPost (req, res) {
    let postId = req.params.postId 

    Post.findbyId(postId, (err, post) => {
        if (err) res.status(500).send({message: `Error al eliminar el post: ${err}`})

        post.remove(err => {
            if (err) res.status(500).send({message: `Error al eliminar el post: ${err}`})
            res.status(200).send({message: `El producto ha sido eliminado`}) 
        })
    })
}

module.exports = {
    getPost,
    getPosts,
    Postpost,
    actualizarPost,
    borrarPost,
}

