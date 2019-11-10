'Use strict'

const posts = require('../models/posts.js')
 
function getposts (req, res) {
    let postsId = req.params.postsId

        posts.findById(postsId,(err, posts)=>{
            if(err) return req.status(500).send({message: `Error al analizar la peticion: ${err}` })
            if (!posts) return res.status(404).send({message: `El producto no existe`})
            res.status(200).send({ product })
        })
}

function saveposts (req, res) {
    console.log('POST /api/posts')
    console.log(req.body)
  
    let posts = new post()
    post.name = req.body.name
    post.comment = req.body.comment
    post.author = req.body.author
    
    posts.save((err, postStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ post: postStored })
    })
  }

  function updatepost (req, res) {
    let postId = req.params.postId
    let update = req.body
  
    posts.findByIdAndUpdate(postId, update, (err, postUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
  
      res.status(200).send({ post: postUpdated })
    })
  }

  function deletepost (req, res) {
    let postId = req.params.postId
  
    post.findById(postId, (err, product) => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
  
      post.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
        res.status(200).send({message: 'El producto ha sido eliminado'})
      })
    })
  }

  module.exports = {
    getposts,
    getposts,
    saveposts,
    updatepost,
    deletepost
  }