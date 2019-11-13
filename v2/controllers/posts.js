'use strict'

const Posts = require('../module/posts')

function getPostsID (req, res) {
    let postsId = req.params.postsId

    Posts.findById(postsId, (req,res) => {
        if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!posts) return res.status(400).send({message: `El post no existe`})
        
        res.status(200).send({posts})
    })
}

function getPosts (req,res) {
    getPosts.find({},(err, posts) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!posts) return res.status(404).send({message: 'No existen productos'})

        res.send(200,{ posts })
    })
}

function saveProduct (req, res){
    let post = new Posts()
    post.title = req.body.title
    post.content = req.body.content

post.save((err, postStock) => {
    if(err) res.status(500).send({message: `Error al guardar el post: ${err}`})

    res.status(200).send({post: postStock})
})
}

function updatePosts (req,res){
    let postId = req.params.postId
    let update = req.body

    Posts.findById(postId, update, (err, postsUpdated)=>{
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

        res.status(200).send({ posts: postsUpdated })
    })
}

function deletePosts (req, res){
    let postId = req.params.postId

    Posts.findById(postId,(err, post) => {
        if (err) res.status(500).send({message: `Error al borrar el post: ${err}`})
    
    post.remove(err =>{
        if (err) res.status(500).send({message: `Error al borrar el post: ${err}`})
        res.status(200).send({message: 'El post ha sido eliminado'})
    })
    })
}

module.exports = {
    getPostsID,
    getPosts,
    saveProduct,
    updatePosts,
    deletePosts
}