
const Card = require('../models/tarjeta')

function getCards (req, res) {
  Card.find({}, (err, cards) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!cards) return res.status(404).send({message: 'No existen cartas'})

    res.send(200, { cards })
  })
}

function saveCard (req, res) {
  console.log('POST /api/card')
  console.log(req.body)

  let card = new Card()
  card.color = req.body.color

  card.save((err, cardStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ card: cardStored })
  })
}

function updateCard (req, res) {
  let b_id = req.params.buttonId
  let update = req.body

  Card.findOneAndUpdate({buttonId: b_id}, update, (err, cardUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar la tarjeta: ${err}`})
    res.status(200).send({ card: cardUpdated })
  })
}


module.exports = {
  getCards,
  saveCard,
  updateCard
}