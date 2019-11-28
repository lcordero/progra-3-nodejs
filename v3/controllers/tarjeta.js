const Tarjeta = require('../models/tarjeta')


function getTarjetas (req, res) {
    Tarjeta.find({}, (err, tarjetas) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!tarjetas) return res.status(404).send({message: 'No existen tarjetas'})
  
      res.send(200, { tarjetas })
    })
}


function updateTarjeta (req, res) {
    let tarjetaId = req.params.tarjetaId
    let update_tarjeta = req.body
  
    Tarjeta.findByIdAndUpdate(tarjetaId, update_tarjeta, (err, tarjetaUpdated) => {
      console.log("======= HEREEEE ======")
      console.log(update_tarjeta)
      if (err) res.status(500).send({message: `Error al actualizar el tarjeta: ${err}`})
  
      res.status(200).send({ tarjeta: update_tarjeta })
    })
}


module.exports = {
    getTarjetas,
    updateTarjeta
  }