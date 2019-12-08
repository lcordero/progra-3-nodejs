const NuevoMenu = require('../models/NuevoMenu')


function getNuevoMenu (req, res) {
  let NuevoMenuId = req.params.NuevoMenuId

  NuevoMenu.findById(NuevoMenuId, (err, nuevo_menu) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!nuevo_menu) return res.status(404).send({message: `El menu no existe`})

    res.status(200).send({ nuevo_menu })
  })
}

function getNuevoMenus (req, res) {
  NuevoMenu.find({}, (err, nuevo_menus) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!nuevo_menus) return res.status(404).send({message: 'No existen menus'})

    res.send(200, { nuevo_menus })
  })
}

function saveNuevoMenu (req, res) {
  console.log('POST /api/menu')
  console.log("req.body")
  console.log(req.body)

  let nuevo_menu = new NuevoMenu()
  nuevo_menu.combo = req.body.combo
  nuevo_menu.bebida = req.body.bebida
  nuevo_menu.acompanamiento = req.body.acompanamiento

  nuevo_menu.save((err, nuevo_menuTienda) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ nuevo_menu: nuevo_menuTienda })
  })
}

function updateNuevoMenu (req, res) {
  let NuevoMenuId = req.params.nuevo_menutId
  let update = req.body

  NuevoMenu.findByIdAndUpdate(NuevoMenuId, update, (err, nuevo_menuUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el menu: ${err}`})

    res.status(200).send({ nuevo_menu: nuevo_menuUpdated })
  })
}

function deleteNuevoMenu (req, res) {
  let NuevoMenuId = req.params.NuevoMenuId
  console.log(NuevoMenuId)
  NuevoMenu.findById(NuevoMenuId, (err, nuevo_menu) => {
    if (err) res.status(500).send({message: `Error al borrar el menu: ${err}`})

    nuevo_menu.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el menu: ${err}`})
      res.status(200).send({message: 'El menu ha sido eliminado'})
    })
  })
}

module.exports = {
  getNuevoMenu,
  getNuevoMenus,
  saveNuevoMenu,
  updateNuevoMenu,
  deleteNuevoMenu
}