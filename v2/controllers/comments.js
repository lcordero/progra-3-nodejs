"use strict"

const comment = require("../models/comments")

function getcomment(req,res){
    let commenttId = req.params.commentId

    post.findById(commentId,(err,comment) => {
     if (err) return res.status(500).send({messege:`Error al realizar la peticion: ${err}`})
        if (!comment) return res.status(404).send({message: `No existen el comment`})

        res.status(200).send({comment}) 
  }) 
}

function getcomment(req,res){
      comment.find({},(err,comment) => {
       if (err) return res.status(500).send({messege:`Error al realizar la peticion: ${err}`})
       if (!comment) return res.status(404).send({message: `No existen el comment`})
   
       res.status(200,{comment}) 
     }) 
}

function savecomment (req,res){
    let comment = new post()
    comment.title = req.body.title
    comment.content = req.body.content
    comment.author = req.body.author

    comment.save((err,Comment) => {
     if (err)res.status(500).send({message:`Error al salvar en la base de datos: ${err}`})
     res.status(200).send({comment: Comment})
    })
}


function updatecomment(req, res){
    let commentId = req.params.commentId
    let update = req.body
  
    comment.findByIdAndUpdate(commentId, update, (err, commentUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar : ${err}`})
  
      res.status(200).send({ comment: commentUpdated })
    })
}

function deletecomment (req,res){
    let commentId= req.params.commentId

    comment.findById(commentId,(err,comment) => {
        if(err) res.status(500).send({message: `Error al borrar : ${err}`})
        comment.remove(err => {
            if(err) res.status(500).send({message: `Error al borrar : ${err}`})
            res.status(200).send({message: `Se elimino `})
        })
    })
}

module.exports ={
    getcomment,
    getcomment,
    savecomment,
    updatecomment,
    deletecomment
}