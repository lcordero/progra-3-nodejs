"use strict"

const post = require("../models/post")

function getPost(req,res){
    let postId = req.params.postId

    post.findById(postId,(err,post) => {
     if (err) return res.status(500).send({messege:`Error al realizar la peticion: ${err}`})
        if (!post) return res.status(404).send({message: `No existen el post`})

        res.status(200).send({post}) 
  }) 
}

function getPost(req,res){
      post.find({},(err,post) => {
       if (err) return res.status(500).send({messege:`Error al realizar la peticion: ${err}`})
       if (!post) return res.status(404).send({message: `No existen el post`})
   
       res.status(200,{post}) 
     }) 
}

function savePost (req,res){
    let post = new post()
    post.title = req.body.title
    post.content = req.body.content
    post.author = req.body.author

    post.save((err,Post) => {
     if (err)res.status(500).send({message:`Error al salvar en la base de datos: ${err}`})
     res.status(200).send({post: Post})
    })
}


function updatePost(req, res){
    let postId = req.params.postId
    let update = req.body
  
    Post.findByIdAndUpdate(postId, update, (err, postUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar el post: ${err}`})
  
      res.status(200).send({ post: postUpdated })
    })
}

function deletePost (req,res){
    let postId= req.params.postId

    Post.findById(postId,(err,post) => {
        if(err) res.status(500).send({message: `Error al borrar post: ${err}`})
        post.remove(err => {
            if(err) res.status(500).send({message: `Error al borrar post: ${err}`})
            res.status(200).send({message: `Se elimino el post`})
        })
    })
}

module.exports ={
    getPost,
    getPost,
    savePost,
    updatePost,
    deletePost
}








