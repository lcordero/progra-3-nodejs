const Product = require('../models/products')

function getProduct (req, res) {
    let productId = req.params.productId
  
    Product.findById(productId, (err, product) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!product) return res.status(404).send({message: `El producto no existe`})
  
      res.status(200).send({ product })
    })
  }

  function saveProduct (req, res) {
    console.log('POST /api/product')
    console.log(req.body)
  
    let product = new Product()
    product.name = req.body.name
    product.lastname = req.body.lastname
   
  }


  function updateProduct (req, res) {
    let productId = req.params.productId
    let update = req.body
  }
  
  
module.export = {
getProduct,
saveproduct,
updateProduct
}