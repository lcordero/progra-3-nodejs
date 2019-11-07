const Posts = require('../models/posts')

function getPosts (req, res) {
    console.log()
    Posts.find({}, (err, posts) => {
      if (err) return res.status(500).send({message: `Error fatal: ${err}`})
      if (!posts || posts.length == 0) return res.status(404).send({message: 'El posts no existen'})
  
      res.send(200, { posts })
    })
}

function getPosts (req, res) {
    console.log()
    let postsId = req.params.postsId
  
    Posts.findById(postsId, (err, posts) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!postsId) return res.status(404).send({message: `El posts no existe`})
  
      res.status(200).send({ posts })
    })
}

function savePosts (req, res) {
    console.log('POST /api/posts')
    console.log(req.body)
  
    let posts = new Posts()
    posts.title = req.body.title
    posts.coments = req.body.coments
    posts.author = req.body.author
    
  
    posts.save((err, postsStored) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})
  
      res.status(200).send({ posts: postStored })
    })
}
  
function updatePosts (req, res) {
    let postsId = req.params.postsId
    let update = req.body
  
    Posts.findByIdAndUpdate(postsId, update, (err, postsUpdated) => {
      if (err) res.status(500).send({message: `Error al actualizar el post: ${err}`})
  
      res.status(200).send({ posts: postUpdated })
    })
}
  
function deletePosts (req, res) {
    let postsId = req.params.postsId
  
    Posts.findById(postsId, (err, posts) => {
      if (err) res.status(500).send({message: `Error al borrar el post: ${err}`})
  
      posts.remove(err => {
        if (err) res.status(500).send({message: `Error al borrar el posts: ${err}`})
        res.status(200).send({message: 'El posts ha sido eliminado'})
      })
    })
}
  
module.exports = {
    getPosts,
    getPosts,
    savePosts,
    updatePosts,
    deletePosts
}