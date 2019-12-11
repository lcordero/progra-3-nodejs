const Form = require('../models/form')


function getForm (req, res) {
    Form.find({}, (err, form) => {
      if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
      if (!form) return res.status(404).send({message: 'No existen form'})
  
      res.send(200, { 'form': form[0] })
    })
}

function updateForm (req, res) {
    let formId = req.params.formId
    let update_form = req.body
  
    Form.findByIdAndUpdate(formId, update_form, (err, formUpdated) => {
      console.log("======= HEREEEE ======")
      console.log(update_form)
      if (err) res.status(500).send({message: `Error al actualizar el form: ${err}`})
  
      res.status(200).send({ form: update_form })
    })
}


module.exports = {
    getForm,
    updateForm
  }